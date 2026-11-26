/* Count completed work and move the vehicles with the two progress meters. */
function activityProgressData() {
  const chapters = LEVELS[state.level].sections.map((section, index) => {
    const answers = state.answers?.[index] || {};
    return {
      done: clozeCount(section, answers) + readingCompletion(section, answers).count,
      total: section.cloze.blanks.length + section.mc.length + section.match.rows.length
    };
  });
  const parts = bikeParts(state.level);
  const labels = {
    done: parts.filter((_, index) => parts.some(part => part.key === state.bikeAnswers?.[`b${index}`])).length,
    total: parts.length
  };
  const overall = chapters.reduce((sum, chapter) => ({
    done: sum.done + chapter.done,
    total: sum.total + chapter.total
  }), labels);
  const diagram = state.stage === 'bike';
  const current = diagram ? labels : chapters[state.p];
  return {
    attempt: `${state.level}|${state.sid}|${state.startT}`,
    page: diagram ? 'labelling' : String(state.p),
    meters: [
      { ...overall, label: 'Overall', caption: `${overall.done} of ${overall.total} done`, vehicle: 'progress-car' },
      { ...current, label: diagram ? 'Labelling' : (state.level==='P'?'Page ':'Chapter ')+(state.p+1), caption: `${current.done} of ${current.total} done`, vehicle: 'progress-jeep' }
    ]
  };
}

function progressMeterMarkup({ done, total, label, caption, vehicle }, previousTrack) {
  const percent = done / Math.max(1, total) * 100;
  const previousDone = Number(previousTrack?.getAttribute('aria-valuenow'));
  const moving = Number(previousTrack?.getAttribute('aria-valuemax')) === total && previousDone !== done;
  const previousPercent = moving ? previousDone / Math.max(1, total) * 100 : percent;
  return `<div class="activity-progress-meter">
    <div class="activity-progress-caption"><strong>${label}</strong><span>${caption}</span></div>
    <div class="activity-progress-rail${moving ? ' moving' : ''}" style="--progress:${percent}%;--previous-progress:${previousPercent}%;--vehicle-position:${percent / 100};--previous-vehicle-position:${previousPercent / 100}">
      <div class="activity-progress-track" role="progressbar" aria-label="${label} progress" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${done}" aria-valuetext="${done} of ${total} done; ${total - done} left"><i></i></div>
      <img class="activity-progress-vehicle" src="../assets/${vehicle}.png" alt="" draggable="false">
    </div>
  </div>`;
}

function activityProgressMarkup(progress = activityProgressData()) {
  const previous = $('activityProgress');
  const tracks = previous?.dataset.attempt === progress.attempt
    ? previous.querySelectorAll('.activity-progress-track')
    : [];
  const overall = progressMeterMarkup(progress.meters[0], tracks[0]);
  const chapter = progressMeterMarkup(progress.meters[1], previous?.dataset.page === progress.page ? tracks[1] : null);
  return `<section id="activityProgress" class="activity-progress" aria-label="Assessment progress" data-attempt="${escapeHTML(progress.attempt)}" data-page="${progress.page}">${overall}${chapter}</section>`;
}

function updateActivityProgress() {
  const existing = $('activityProgress');
  if (!existing || !state || state.done) return;
  const progress = activityProgressData();
  const tracks = [...existing.querySelectorAll('.activity-progress-track')];
  const sameCounts = tracks.length === progress.meters.length && tracks.every((track, index) => {
    const { done, total } = progress.meters[index];
    return Number(track.getAttribute('aria-valuenow')) === done && Number(track.getAttribute('aria-valuemax')) === total;
  });
  if (sameCounts && existing.dataset.attempt === progress.attempt && existing.dataset.page === progress.page) return;
  existing.outerHTML = activityProgressMarkup(progress);
}
