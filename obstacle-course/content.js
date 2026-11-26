/* Original fiction; F&P letters are instructional targets for teacher review. */
const LEVELS={
  "E": {
    "grade": "F&P E target",
    "titles": [
      "A day at the park",
      "On the log",
      "A big hoop",
      "At the flag"
    ],
    "sections": [
      {
        "text": [
          "It is a sunny day. Sam and Leila go to the park with Jo. Jo puts a map on the table.",
          "Sam sees a red cone. Leila holds a big hoop.",
          "A log is on the grass.",
          "Sam walks to the log. He wants to walk on it."
        ],
        "mc": [
          {
            "prompt": "What colour is the cone?",
            "choices": [
              "Tan",
              "Red"
            ],
            "answer": 1,
            "skill": "Find a story detail",
            "evidence": "Red"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Leila holds a…",
              "big hoop"
            ]
          ],
          "options": [
            "big hoop",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Leila holds a… big hoop"
          ]
        },
        "cloze": {
          "paragraphs": [
            "It is a sunny day. Sam and Leila go to the park with Jo. Jo puts a map on the table.",
            "Sam sees a {{c0}} cone. Leila holds a big hoop.",
            "A {{c1}} is on the grass.",
            "Sam walks to the log. He wants to walk on it."
          ],
          "parts": [
            "It is a sunny day. Sam and Leila go to the park with Jo. Jo puts a map on the table.\n\nSam sees a {{c0}} cone. Leila holds a big hoop.\n\nA {{c1}} is on the grass.\n\nSam walks to the log. He wants to walk on it."
          ],
          "columns": [
            "It is a sunny day. Sam and Leila go to the park with Jo. Jo puts a map on the table. Sam sees a {{c0}} cone. Leila holds a big hoop.",
            "A {{c1}} is on the grass. Sam walks to the log. He wants to walk on it."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "red",
              "paragraph": 1,
              "prompt": "Sam sees a ______ cone. Leila holds a big hoop."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "log",
              "paragraph": 2,
              "prompt": "A ______ is on the grass."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "log"
            },
            {
              "id": "w0",
              "word": "red"
            }
          ]
        }
      },
      {
        "text": [
          "Sam walks on the log. His leg shakes.",
          "He puts his arms out. He walks to the end of the log.",
          "Leila looks at the log. Sam steps onto the grass and hops from stone to stone.",
          "A rope is close to the ground. Sam lifts his foot and steps over the rope."
        ],
        "mc": [
          {
            "prompt": "What does Sam put out?",
            "choices": [
              "His arms",
              "His hat"
            ],
            "answer": 0,
            "skill": "Find a story detail",
            "evidence": "His arms"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Sam is on the…",
              "log"
            ]
          ],
          "options": [
            "log",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Sam is on the… log"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam walks on the {{c0}}. His leg shakes.",
            "He puts his arms out. He walks to the {{c1}} of the log.",
            "Leila looks at the log. Sam steps onto the grass and hops from stone to stone.",
            "A rope is close to the ground. Sam lifts his foot and steps over the rope."
          ],
          "parts": [
            "Sam walks on the {{c0}}. His leg shakes.\n\nHe puts his arms out. He walks to the {{c1}} of the log.\n\nLeila looks at the log. Sam steps onto the grass and hops from stone to stone.\n\nA rope is close to the ground. Sam lifts his foot and steps over the rope."
          ],
          "columns": [
            "Sam walks on the {{c0}}. His leg shakes. He puts his arms out. He walks to the {{c1}} of the log.",
            "Leila looks at the log. Sam steps onto the grass and hops from stone to stone. A rope is close to the ground. Sam lifts his foot and steps over the rope."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "log",
              "paragraph": 0,
              "prompt": "Sam walks on the ______. His leg shakes."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "end",
              "paragraph": 1,
              "prompt": "He puts his arms out. He walks to the ______ of the log."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "end"
            },
            {
              "id": "w0",
              "word": "log"
            }
          ]
        }
      },
      {
        "text": [
          "Leila holds a big hoop.",
          "Sam bends his head down. He steps through the hoop.",
          "Sam holds the hoop for Leila. Leila steps through it.",
          "Leila is his pal. A pal is a friend.",
          "A flat beam rests on two blocks. Sam walks along the beam with Jo beside him."
        ],
        "mc": [
          {
            "prompt": "What does Sam do with his head?",
            "choices": [
              "Lifts it up",
              "Bends it down"
            ],
            "answer": 1,
            "skill": "Find a story detail",
            "evidence": "Sam bends his head down."
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Sam can help his…",
              "pal"
            ]
          ],
          "options": [
            "pal",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Sam can help his… pal"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Leila holds a {{c0}} hoop.",
            "Sam bends his head down. He steps through the hoop.",
            "Sam holds the hoop for Leila. Leila steps through it.",
            "Leila is his {{c1}}. A pal is a friend.",
            "A flat beam rests on two blocks. Sam walks along the beam with Jo beside him."
          ],
          "parts": [
            "Leila holds a {{c0}} hoop.\n\nSam bends his head down. He steps through the hoop.\n\nSam holds the hoop for Leila. Leila steps through it.\n\nLeila is his {{c1}}. A pal is a friend.\n\nA flat beam rests on two blocks. Sam walks along the beam with Jo beside him."
          ],
          "columns": [
            "Leila holds a {{c0}} hoop. Sam bends his head down. He steps through the hoop.",
            "Sam holds the hoop for Leila. Leila steps through it. Leila is his {{c1}}. A pal is a friend. A flat beam rests on two blocks. Sam walks along the beam with Jo beside him."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "big",
              "paragraph": 0,
              "prompt": "Leila holds a ______ hoop."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "pal",
              "paragraph": 3,
              "prompt": "Leila is his ______. A pal is a friend."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "pal"
            },
            {
              "id": "w0",
              "word": "big"
            }
          ]
        }
      },
      {
        "text": [
          "Sam crawls through the tunnel. Leila crawls through it too.",
          "Sam and Leila walk between the cones. They see the yellow flag at the end of the course.",
          "They walk to the flag. Jo smiles.",
          "“This is fun!” says Sam.",
          "Then they sort the cones by colour."
        ],
        "mc": [
          {
            "prompt": "Who smiles?",
            "choices": [
              "Jo",
              "Sam"
            ],
            "answer": 0,
            "skill": "Find a story detail",
            "evidence": "Jo"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Sam thinks the course is…",
              "fun"
            ]
          ],
          "options": [
            "fun",
            "a tall tree"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Sam thinks the course is… fun"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam crawls through the tunnel. Leila crawls through it too.",
            "Sam and Leila walk between the cones. They see the yellow {{c0}} at the end of the course.",
            "They walk to the flag. Jo smiles.",
            "“This is {{c1}}!” says Sam.",
            "Then they sort the cones by colour."
          ],
          "parts": [
            "Sam crawls through the tunnel. Leila crawls through it too.\n\nSam and Leila walk between the cones. They see the yellow {{c0}} at the end of the course.\n\nThey walk to the flag. Jo smiles.\n\n“This is {{c1}}!” says Sam.\n\nThen they sort the cones by colour."
          ],
          "columns": [
            "Sam crawls through the tunnel. Leila crawls through it too. Sam and Leila walk between the cones. They see the yellow {{c0}} at the end of the course.",
            "They walk to the flag. Jo smiles. “This is {{c1}}!” says Sam. Then they sort the cones by colour."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "flag",
              "paragraph": 1,
              "prompt": "Sam and Leila walk between the cones. They see the yellow ______ at the end of the course."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "fun",
              "paragraph": 3,
              "prompt": "“This is ______!” says Sam."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "fun"
            },
            {
              "id": "w0",
              "word": "flag"
            }
          ]
        }
      }
    ],
    "intro": "198 words · 4 reading pages · 2 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "F": {
    "grade": "F&P F target",
    "titles": [
      "A sunny start",
      "Steady steps",
      "A hoop for a friend",
      "Finish together"
    ],
    "sections": [
      {
        "text": [
          "On a sunny morning, Sam and Leila walked to the park with Jo to try the new course. Its map was on a table.",
          "Sam and Leila went to the park with Jo.",
          "Red cones showed the way around a short course.",
          "There was a low log, a hoop, and a tunnel.",
          "Jo asked them to leave a space and wait for their turn."
        ],
        "mc": [
          {
            "prompt": "What showed the way around the course?",
            "choices": [
              "Blue bags",
              "Tall trees",
              "Red cones"
            ],
            "answer": 2,
            "skill": "Find a story detail",
            "evidence": "Red cones showed the way"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "The course had",
              "a low log"
            ],
            [
              "Jo asked them",
              "to wait their turn"
            ]
          ],
          "options": [
            "to wait their turn",
            "a low log"
          ],
          "skill": "Connect story details",
          "evidence": [
            "The course had a low log",
            "Jo asked them to wait their turn"
          ]
        },
        "cloze": {
          "paragraphs": [
            "On a sunny morning, Sam and Leila walked to the park with Jo to try the new course. Its map was on a table.",
            "Sam and Leila went to the park with {{c0}}.",
            "Red cones showed the way around a short course.",
            "There was a low log, a hoop, and a tunnel.",
            "Jo asked them to leave a space and wait for their {{c1}}."
          ],
          "parts": [
            "On a sunny morning, Sam and Leila walked to the park with Jo to try the new course. Its map was on a table.\n\nSam and Leila went to the park with {{c0}}.\n\nRed cones showed the way around a short course.\n\nThere was a low log, a hoop, and a tunnel.\n\nJo asked them to leave a space and wait for their {{c1}}."
          ],
          "columns": [
            "On a sunny morning, Sam and Leila walked to the park with Jo to try the new course. Its map was on a table. Sam and Leila went to the park with {{c0}}.",
            "Red cones showed the way around a short course. There was a low log, a hoop, and a tunnel. Jo asked them to leave a space and wait for their {{c1}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "Jo",
              "paragraph": 1,
              "prompt": "Sam and Leila went to the park with ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "turn",
              "paragraph": 4,
              "prompt": "Jo asked them to leave a space and wait for their ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "turn"
            },
            {
              "id": "w0",
              "word": "Jo"
            }
          ]
        }
      },
      {
        "text": [
          "Sam stepped onto the low log.",
          "He hurried, and his foot slipped to the ground.",
          "Jo asked him to try short, slow steps.",
          "Sam held out his arms and got to the other end.",
          "Leila said, \"Look at the log.\"",
          "They crossed the stepping stones and stepped over a low rope. Jo stayed close."
        ],
        "mc": [
          {
            "prompt": "What helped Sam cross the log?",
            "choices": [
              "Running fast",
              "Short, slow steps",
              "Closing his eyes"
            ],
            "answer": 1,
            "skill": "Find cause and effect",
            "evidence": "short, slow steps"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Sam held out",
              "his arms"
            ],
            [
              "His foot slipped",
              "when he hurried"
            ]
          ],
          "options": [
            "when he hurried",
            "his arms"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Sam held out his arms",
            "His foot slipped when he hurried"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam stepped onto the low {{c0}}.",
            "He hurried, and his foot slipped to the ground.",
            "Jo asked him to try short, slow steps.",
            "Sam held out his arms and got to the other {{c1}}.",
            "Leila said, \"Look at the log.\"",
            "They crossed the stepping stones and stepped over a low rope. Jo stayed close."
          ],
          "parts": [
            "Sam stepped onto the low {{c0}}.\n\nHe hurried, and his foot slipped to the ground.\n\nJo asked him to try short, slow steps.\n\nSam held out his arms and got to the other {{c1}}.\n\nLeila said, \"Look at the log.\"\n\nThey crossed the stepping stones and stepped over a low rope. Jo stayed close."
          ],
          "columns": [
            "Sam stepped onto the low {{c0}}. He hurried, and his foot slipped to the ground.",
            "Jo asked him to try short, slow steps. Sam held out his arms and got to the other {{c1}}. Leila said, \"Look at the log.\" They crossed the stepping stones and stepped over a low rope. Jo stayed close."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "log",
              "paragraph": 0,
              "prompt": "Sam stepped onto the low ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "end",
              "paragraph": 3,
              "prompt": "Sam held out his arms and got to the other ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "end"
            },
            {
              "id": "w0",
              "word": "log"
            }
          ]
        }
      },
      {
        "text": [
          "Leila held up the yellow hoop.",
          "Sam ducked his head and stepped through.",
          "He wanted to run to the tunnel, but Leila was still waiting.",
          "Sam came back and held the hoop for his friend.",
          "They also tried a low balance beam, with Jo beside them."
        ],
        "mc": [
          {
            "prompt": "Why did Sam come back?",
            "choices": [
              "To hold the hoop for Leila",
              "To move the tunnel",
              "To find his shoes"
            ],
            "answer": 0,
            "skill": "Infer a motive",
            "evidence": "held the hoop for his friend"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Leila held",
              "the yellow hoop"
            ],
            [
              "Sam ducked",
              "his head"
            ]
          ],
          "options": [
            "his head",
            "the yellow hoop"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Leila held the yellow hoop",
            "Sam ducked his head"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Leila held up the yellow {{c0}}.",
            "Sam ducked his head and stepped through.",
            "He wanted to run to the tunnel, but Leila was still waiting.",
            "Sam came back and held the hoop for his {{c1}}.",
            "They also tried a low balance beam, with Jo beside them."
          ],
          "parts": [
            "Leila held up the yellow {{c0}}.\n\nSam ducked his head and stepped through.\n\nHe wanted to run to the tunnel, but Leila was still waiting.\n\nSam came back and held the hoop for his {{c1}}.\n\nThey also tried a low balance beam, with Jo beside them."
          ],
          "columns": [
            "Leila held up the yellow {{c0}}. Sam ducked his head and stepped through.",
            "He wanted to run to the tunnel, but Leila was still waiting. Sam came back and held the hoop for his {{c1}}. They also tried a low balance beam, with Jo beside them."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hoop",
              "paragraph": 0,
              "prompt": "Leila held up the yellow ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "friend",
              "paragraph": 3,
              "prompt": "Sam came back and held the hoop for his ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "friend"
            },
            {
              "id": "w0",
              "word": "hoop"
            }
          ]
        }
      },
      {
        "text": [
          "They weaved in and out of the last cones on the way to the flag.",
          "Leila crawled through the short tunnel.",
          "Sam waited at the far end and cheered.",
          "They walked to the yellow flag side by side.",
          "Jo said the best part was how they had helped each other.",
          "After the course, they helped Jo sort the cones."
        ],
        "mc": [
          {
            "prompt": "What did Jo like best?",
            "choices": [
              "They moved the flag.",
              "They ran in the tunnel.",
              "They helped each other."
            ],
            "answer": 2,
            "skill": "Find a message",
            "evidence": "helped each other"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Leila crawled",
              "through the tunnel"
            ],
            [
              "Sam waited",
              "at the far end"
            ]
          ],
          "options": [
            "at the far end",
            "through the tunnel"
          ],
          "skill": "Connect story details",
          "evidence": [
            "Leila crawled through the tunnel",
            "Sam waited at the far end"
          ]
        },
        "cloze": {
          "paragraphs": [
            "They weaved in and out of the last cones on the way to the flag.",
            "Leila crawled through the short {{c0}}.",
            "Sam waited at the far end and cheered.",
            "They walked to the yellow flag side by side.",
            "Jo said the best part was how they had helped each {{c1}}.",
            "After the course, they helped Jo sort the cones."
          ],
          "parts": [
            "They weaved in and out of the last cones on the way to the flag.\n\nLeila crawled through the short {{c0}}.\n\nSam waited at the far end and cheered.\n\nThey walked to the yellow flag side by side.\n\nJo said the best part was how they had helped each {{c1}}.\n\nAfter the course, they helped Jo sort the cones."
          ],
          "columns": [
            "They weaved in and out of the last cones on the way to the flag. Leila crawled through the short {{c0}}.",
            "Sam waited at the far end and cheered. They walked to the yellow flag side by side. Jo said the best part was how they had helped each {{c1}}. After the course, they helped Jo sort the cones."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "tunnel",
              "paragraph": 1,
              "prompt": "Leila crawled through the short ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "other",
              "paragraph": 4,
              "prompt": "Jo said the best part was how they had helped each ______."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "other"
            },
            {
              "id": "w0",
              "word": "tunnel"
            }
          ]
        }
      }
    ],
    "intro": "223 words · 4 reading pages · 2 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "G": {
    "grade": "F&P G target",
    "titles": [
      "A sunny start",
      "Steady steps",
      "A hoop for a friend",
      "Finish together"
    ],
    "sections": [
      {
        "text": [
          "On a sunny Saturday morning, Sam and Leila walked to the park with Jo. They were excited to try the new obstacle course. Jo spread its map on a table.",
          "Sam and Leila went to the park with Jo. They found a short obstacle course on the grass.",
          "Red cones showed the way to a low log, a hoop and a tunnel. The children looked at each part before starting.",
          "Jo asked them to leave a space and wait for their turn. They would try the course one at a time."
        ],
        "mc": [
          {
            "prompt": "What showed the way around the course?",
            "choices": [
              "Blue bags",
              "Tall trees",
              "Red cones"
            ],
            "answer": 2,
            "skill": "Find a story detail",
            "evidence": "Red cones showed the way"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "The course had",
              "a low log"
            ],
            [
              "Jo asked them",
              "to wait their turn"
            ]
          ],
          "options": [
            "to wait their turn",
            "a low log"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The course had a low log",
            "Jo asked them to wait their turn"
          ]
        },
        "cloze": {
          "paragraphs": [
            "On a sunny Saturday morning, Sam and Leila walked to the park with Jo. They were excited to try the new obstacle course. Jo spread its map on a table.",
            "Sam and Leila went to the park with {{c0}}. They found a short obstacle course on the grass.",
            "Red cones showed the way to a low log, a hoop and a tunnel. The children looked at each part before starting.",
            "Jo asked them to leave a space and wait for their {{c1}}. They would try the course one at a time."
          ],
          "parts": [
            "On a sunny Saturday morning, Sam and Leila walked to the park with Jo. They were excited to try the new obstacle course. Jo spread its map on a table.\n\nSam and Leila went to the park with {{c0}}. They found a short obstacle course on the grass.\n\nRed cones showed the way to a low log, a hoop and a tunnel. The children looked at each part before starting.\n\nJo asked them to leave a space and wait for their {{c1}}. They would try the course one at a time."
          ],
          "columns": [
            "On a sunny Saturday morning, Sam and Leila walked to the park with Jo. They were excited to try the new obstacle course. Jo spread its map on a table. Sam and Leila went to the park with {{c0}}. They found a short obstacle course on the grass.",
            "Red cones showed the way to a low log, a hoop and a tunnel. The children looked at each part before starting. Jo asked them to leave a space and wait for their {{c1}}. They would try the course one at a time."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "Jo",
              "paragraph": 1,
              "prompt": "Sam and Leila went to the park with ______. They found a short obstacle course on the grass."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "turn",
              "paragraph": 3,
              "prompt": "Jo asked them to leave a space and wait for their ______. They would try the course one at a time."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "turn"
            },
            {
              "id": "w0",
              "word": "Jo"
            }
          ]
        }
      },
      {
        "text": [
          "Sam stepped onto the low log and began to hurry. His foot slipped, so he stepped onto the grass.",
          "Jo asked him to try again with short, slow steps. Sam held out his arms to help him balance.",
          "This time, he reached the other end. He waited there while Leila had her turn.",
          "Leila said, \"Look at the log.\"",
          "They crossed the stepping stones and stepped over a low rope. Jo stayed close."
        ],
        "mc": [
          {
            "prompt": "What helped Sam cross the log?",
            "choices": [
              "Running fast",
              "Short, slow steps",
              "Closing his eyes"
            ],
            "answer": 1,
            "skill": "Find cause and effect",
            "evidence": "short, slow steps"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Sam held out",
              "his arms"
            ],
            [
              "His foot slipped",
              "when he hurried"
            ]
          ],
          "options": [
            "when he hurried",
            "his arms"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Sam held out his arms",
            "His foot slipped when he hurried"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam stepped onto the low {{c0}} and began to hurry. His foot slipped, so he stepped onto the grass.",
            "Jo asked him to try again with short, slow steps. Sam held out his arms to help him balance.",
            "This time, he reached the other {{c1}}. He waited there while Leila had her turn.",
            "Leila said, \"Look at the log.\"",
            "They crossed the stepping stones and stepped over a low rope. Jo stayed close."
          ],
          "parts": [
            "Sam stepped onto the low {{c0}} and began to hurry. His foot slipped, so he stepped onto the grass.\n\nJo asked him to try again with short, slow steps. Sam held out his arms to help him balance.\n\nThis time, he reached the other {{c1}}. He waited there while Leila had her turn.\n\nLeila said, \"Look at the log.\"\n\nThey crossed the stepping stones and stepped over a low rope. Jo stayed close."
          ],
          "columns": [
            "Sam stepped onto the low {{c0}} and began to hurry. His foot slipped, so he stepped onto the grass. Jo asked him to try again with short, slow steps. Sam held out his arms to help him balance.",
            "This time, he reached the other {{c1}}. He waited there while Leila had her turn. Leila said, \"Look at the log.\" They crossed the stepping stones and stepped over a low rope. Jo stayed close."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "log",
              "paragraph": 0,
              "prompt": "Sam stepped onto the low ______ and began to hurry. His foot slipped, so he stepped onto the grass."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "end",
              "paragraph": 2,
              "prompt": "This time, he reached the other ______. He waited there while Leila had her turn."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "end"
            },
            {
              "id": "w0",
              "word": "log"
            }
          ]
        }
      },
      {
        "text": [
          "Leila held up the yellow hoop. Sam ducked his head and stepped through the middle.",
          "He turned towards the tunnel, but then he saw Leila waiting. She had not had a turn yet.",
          "Sam came back and held the hoop for his friend. Leila smiled as she stepped through.",
          "They also tried a low balance beam, with Jo beside them."
        ],
        "mc": [
          {
            "prompt": "Why did Sam come back?",
            "choices": [
              "To hold the hoop for Leila",
              "To move the tunnel",
              "To find his shoes"
            ],
            "answer": 0,
            "skill": "Infer a motive",
            "evidence": "held the hoop for his friend"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Leila held",
              "the yellow hoop"
            ],
            [
              "Sam ducked",
              "his head"
            ]
          ],
          "options": [
            "his head",
            "the yellow hoop"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Leila held the yellow hoop",
            "Sam ducked his head"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Leila held up the yellow {{c0}}. Sam ducked his head and stepped through the middle.",
            "He turned towards the tunnel, but then he saw Leila waiting. She had not had a turn yet.",
            "Sam came back and held the hoop for his {{c1}}. Leila smiled as she stepped through.",
            "They also tried a low balance beam, with Jo beside them."
          ],
          "parts": [
            "Leila held up the yellow {{c0}}. Sam ducked his head and stepped through the middle.\n\nHe turned towards the tunnel, but then he saw Leila waiting. She had not had a turn yet.\n\nSam came back and held the hoop for his {{c1}}. Leila smiled as she stepped through.\n\nThey also tried a low balance beam, with Jo beside them."
          ],
          "columns": [
            "Leila held up the yellow {{c0}}. Sam ducked his head and stepped through the middle. He turned towards the tunnel, but then he saw Leila waiting. She had not had a turn yet.",
            "Sam came back and held the hoop for his {{c1}}. Leila smiled as she stepped through. They also tried a low balance beam, with Jo beside them."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hoop",
              "paragraph": 0,
              "prompt": "Leila held up the yellow ______. Sam ducked his head and stepped through the middle."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "friend",
              "paragraph": 2,
              "prompt": "Sam came back and held the hoop for his ______. Leila smiled as she stepped through."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "friend"
            },
            {
              "id": "w0",
              "word": "hoop"
            }
          ]
        }
      },
      {
        "text": [
          "They weaved in and out of the last cones on the way to the flag.",
          "Leila crawled through the short tunnel. Sam waited at the far end and cheered when she came out.",
          "Then the children walked to the yellow flag side by side. They were pleased to finish together.",
          "Jo said the best part was how they had helped each other. Sam and Leila wanted to try the course again.",
          "After the course, they helped Jo sort the cones."
        ],
        "mc": [
          {
            "prompt": "What did Jo like best?",
            "choices": [
              "They moved the flag.",
              "They ran in the tunnel.",
              "They helped each other."
            ],
            "answer": 2,
            "skill": "Find a message",
            "evidence": "helped each other"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Leila crawled",
              "through the tunnel"
            ],
            [
              "Sam waited",
              "at the far end"
            ]
          ],
          "options": [
            "at the far end",
            "through the tunnel"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Leila crawled through the tunnel",
            "Sam waited at the far end"
          ]
        },
        "cloze": {
          "paragraphs": [
            "They weaved in and out of the last cones on the way to the flag.",
            "Leila crawled through the short {{c0}}. Sam waited at the far end and cheered when she came out.",
            "Then the children walked to the yellow flag side by side. They were pleased to finish together.",
            "Jo said the best part was how they had helped each {{c1}}. Sam and Leila wanted to try the course again.",
            "After the course, they helped Jo sort the cones."
          ],
          "parts": [
            "They weaved in and out of the last cones on the way to the flag.\n\nLeila crawled through the short {{c0}}. Sam waited at the far end and cheered when she came out.\n\nThen the children walked to the yellow flag side by side. They were pleased to finish together.\n\nJo said the best part was how they had helped each {{c1}}. Sam and Leila wanted to try the course again.\n\nAfter the course, they helped Jo sort the cones."
          ],
          "columns": [
            "They weaved in and out of the last cones on the way to the flag. Leila crawled through the short {{c0}}. Sam waited at the far end and cheered when she came out.",
            "Then the children walked to the yellow flag side by side. They were pleased to finish together. Jo said the best part was how they had helped each {{c1}}. Sam and Leila wanted to try the course again. After the course, they helped Jo sort the cones."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "tunnel",
              "paragraph": 1,
              "prompt": "Leila crawled through the short ______. Sam waited at the far end and cheered when she came out."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "other",
              "paragraph": 3,
              "prompt": "Jo said the best part was how they had helped each ______. Sam and Leila wanted to try the course again."
            }
          ],
          "bank": [
            {
              "id": "w1",
              "word": "other"
            },
            {
              "id": "w0",
              "word": "tunnel"
            }
          ]
        }
      }
    ],
    "intro": "304 words · 4 reading pages · 2 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "L": {
    "grade": "F&P L target",
    "titles": [
      "A sunny start",
      "Slow feet, steady arms",
      "The hoop problem",
      "A finish for two"
    ],
    "sections": [
      {
        "text": [
          "Sam woke early on a sunny Saturday. He and Leila were walking to Adventure Park with their guide, Jo, to try a new obstacle course. Beyond the gate, children were hopping, balancing and crawling. “Let’s have a go!” Sam said.",
          "Sam traced the obstacle course on Jo’s map. Red cones led to a low log, a hoop, a short tunnel, and a yellow finish flag.",
          "He planned to finish before Leila. She wanted to learn how each obstacle worked before she tried it.",
          "Jo reminded them that the course was a place to practise, not a timed race. They would leave a safe space between each person.",
          "Sam nodded, but his feet kept making little running steps. Leila pointed to the first obstacle. \"Let’s learn that one first,\" she said."
        ],
        "mc": [
          {
            "prompt": "How do the children’s plans differ?",
            "choices": [
              "Both want to skip the log.",
              "Leila wants a timed race; Sam wants to wait.",
              "Both want to move the flag.",
              "Sam wants speed; Leila wants to learn each obstacle."
            ],
            "answer": 3,
            "skill": "Compare viewpoints",
            "evidence": "finish before Leila"
          },
          {
            "prompt": "Why does Jo ask for space between people?",
            "choices": [
              "So the course looks longer",
              "So the cones can fall over",
              "So each person has room to practise safely",
              "So no one can see the map"
            ],
            "answer": 2,
            "skill": "Infer a reason",
            "evidence": "leave a safe space"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Red cones",
              "marked the route"
            ],
            [
              "The yellow flag",
              "marked the finish"
            ]
          ],
          "options": [
            "marked the finish",
            "marked the route"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Red cones marked the route",
            "The yellow flag marked the finish"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam woke early on a sunny Saturday. He and Leila were walking to Adventure Park with their guide, Jo, to try a new obstacle course. Beyond the gate, children were hopping, balancing and crawling. “Let’s have a go!” Sam said.",
            "Sam traced the obstacle course on Jo’s map. Red {{c0}} led to a low log, a hoop, a short tunnel, and a yellow finish flag.",
            "He planned to finish before Leila. She wanted to learn how each obstacle worked before she tried it.",
            "Jo reminded them that the course was a place to practise, not a timed race. They would leave a safe {{c1}} between each person.",
            "Sam nodded, but his feet kept making little running steps. Leila pointed to the first {{c2}}. \"Let’s learn that one first,\" she said."
          ],
          "parts": [
            "Sam woke early on a sunny Saturday. He and Leila were walking to Adventure Park with their guide, Jo, to try a new obstacle course. Beyond the gate, children were hopping, balancing and crawling. “Let’s have a go!” Sam said.\n\nSam traced the obstacle course on Jo’s map. Red {{c0}} led to a low log, a hoop, a short tunnel, and a yellow finish flag.\n\nHe planned to finish before Leila. She wanted to learn how each obstacle worked before she tried it.\n\nJo reminded them that the course was a place to practise, not a timed race. They would leave a safe {{c1}} between each person.\n\nSam nodded, but his feet kept making little running steps. Leila pointed to the first {{c2}}. \"Let’s learn that one first,\" she said."
          ],
          "columns": [
            "Sam woke early on a sunny Saturday. He and Leila were walking to Adventure Park with their guide, Jo, to try a new obstacle course. Beyond the gate, children were hopping, balancing and crawling. “Let’s have a go!” Sam said. Sam traced the obstacle course on Jo’s map. Red {{c0}} led to a low log, a hoop, a short tunnel, and a yellow finish flag.",
            "He planned to finish before Leila. She wanted to learn how each obstacle worked before she tried it. Jo reminded them that the course was a place to practise, not a timed race. They would leave a safe {{c1}} between each person. Sam nodded, but his feet kept making little running steps. Leila pointed to the first {{c2}}. \"Let’s learn that one first,\" she said."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "cones",
              "paragraph": 1,
              "prompt": "Sam traced the obstacle course on Jo’s map. Red ______ led to a low log, a hoop, a short tunnel, and a yellow finish flag."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "space",
              "paragraph": 3,
              "prompt": "Jo reminded them that the course was a place to practise, not a timed race. They would leave a safe ______ between each person."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "obstacle",
              "paragraph": 4,
              "prompt": "Sam nodded, but his feet kept making little running steps. Leila pointed to the first ______. \"Let’s learn that one first,\" she said."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "obstacle"
            },
            {
              "id": "w1",
              "word": "space"
            },
            {
              "id": "w0",
              "word": "cones"
            }
          ]
        }
      },
      {
        "text": [
          "They crossed the stepping stones first, leaving room for each other.",
          "Sam took three quick steps along the low log. His foot slipped, and he stepped onto the grass beside it.",
          "Leila noticed that his eyes had been fixed on the finish flag. She suggested looking along the log instead.",
          "With Jo beside the obstacle, Sam tried again. He took shorter steps and spread his arms to help himself balance.",
          "This time he reached the other end. The log had not become easier, but Sam had changed his approach. He waited while Leila took her turn."
        ],
        "mc": [
          {
            "prompt": "What changes on Sam’s second attempt?",
            "choices": [
              "Leila removes the flag.",
              "The log becomes shorter.",
              "He changes his way of moving and looking.",
              "Jo makes the log wider."
            ],
            "answer": 2,
            "skill": "Connect cause and effect",
            "evidence": "took shorter steps"
          },
          {
            "prompt": "What does “approach” mean here?",
            "choices": [
              "A sound in the park",
              "Way of doing something",
              "A place to sit",
              "A bright colour"
            ],
            "answer": 1,
            "skill": "Use vocabulary in context",
            "evidence": "changed his approach"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Looking along the log",
              "helped Sam focus"
            ],
            [
              "Spreading his arms",
              "helped him balance"
            ]
          ],
          "options": [
            "helped him balance",
            "helped Sam focus"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Looking along the log helped Sam focus",
            "Spreading his arms helped him balance"
          ]
        },
        "cloze": {
          "paragraphs": [
            "They crossed the stepping stones first, leaving room for each other.",
            "Sam took three quick steps along the low {{c0}}. His foot slipped, and he stepped onto the grass beside it.",
            "Leila noticed that his eyes had been fixed on the finish flag. She suggested looking along the log instead.",
            "With Jo beside the obstacle, Sam tried again. He took shorter steps and spread his {{c1}} to help himself balance.",
            "This time he reached the other end. The log had not become easier, but Sam had changed his {{c2}}. He waited while Leila took her turn."
          ],
          "parts": [
            "They crossed the stepping stones first, leaving room for each other.\n\nSam took three quick steps along the low {{c0}}. His foot slipped, and he stepped onto the grass beside it.\n\nLeila noticed that his eyes had been fixed on the finish flag. She suggested looking along the log instead.\n\nWith Jo beside the obstacle, Sam tried again. He took shorter steps and spread his {{c1}} to help himself balance.\n\nThis time he reached the other end. The log had not become easier, but Sam had changed his {{c2}}. He waited while Leila took her turn."
          ],
          "columns": [
            "They crossed the stepping stones first, leaving room for each other. Sam took three quick steps along the low {{c0}}. His foot slipped, and he stepped onto the grass beside it.",
            "Leila noticed that his eyes had been fixed on the finish flag. She suggested looking along the log instead. With Jo beside the obstacle, Sam tried again. He took shorter steps and spread his {{c1}} to help himself balance. This time he reached the other end. The log had not become easier, but Sam had changed his {{c2}}. He waited while Leila took her turn."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "log",
              "paragraph": 1,
              "prompt": "Sam took three quick steps along the low ______. His foot slipped, and he stepped onto the grass beside it."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "arms",
              "paragraph": 3,
              "prompt": "With Jo beside the obstacle, Sam tried again. He took shorter steps and spread his ______ to help himself balance."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "approach",
              "paragraph": 4,
              "prompt": "This time he reached the other end. The log had not become easier, but Sam had changed his ______. He waited while Leila took her turn."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "approach"
            },
            {
              "id": "w1",
              "word": "arms"
            },
            {
              "id": "w0",
              "word": "log"
            }
          ]
        }
      },
      {
        "text": [
          "Next came the low beam and rope. Jo stayed beside the beam as they balanced, then watched them step over the rope.",
          "Leila held the hoop while Sam stepped through. He was already facing the tunnel when he remembered that she had not had a turn.",
          "He returned, but held the hoop too high. Leila could not step through without catching her foot on the rim.",
          "\"Lower it a little,\" she asked. Sam listened and steadied the hoop with both hands.",
          "After Leila crossed, they talked about their plan for the tunnel. Sam was beginning to notice that helping meant more than simply waiting; it also meant listening."
        ],
        "mc": [
          {
            "prompt": "Why does Leila ask Sam to lower the hoop?",
            "choices": [
              "Jo has asked her to stop.",
              "The rim is too high for her to step over.",
              "She wants to hide the tunnel.",
              "The hoop has a loose wheel."
            ],
            "answer": 1,
            "skill": "Find a reason",
            "evidence": "held the hoop too high"
          },
          {
            "prompt": "What does Sam learn about helping?",
            "choices": [
              "He needs to listen to what his partner needs.",
              "He should always choose the fastest way.",
              "He must do every obstacle for Leila.",
              "He should avoid speaking."
            ],
            "answer": 0,
            "skill": "Explain a lesson",
            "evidence": "it also meant listening"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Sam returned",
              "so Leila could have a turn"
            ],
            [
              "Leila asked",
              "for the hoop to be lower"
            ]
          ],
          "options": [
            "for the hoop to be lower",
            "so Leila could have a turn"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Sam returned so Leila could have a turn",
            "Leila asked for the hoop to be lower"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Next came the low beam and rope. Jo stayed beside the beam as they balanced, then watched them step over the rope.",
            "Leila held the {{c0}} while Sam stepped through. He was already facing the tunnel when he remembered that she had not had a turn.",
            "He returned, but held the hoop too high. Leila could not step through without catching her {{c1}} on the rim.",
            "\"Lower it a little,\" she asked. Sam listened and steadied the hoop with both hands.",
            "After Leila crossed, they talked about their plan for the tunnel. Sam was beginning to notice that helping meant more than simply waiting; it also meant {{c2}}."
          ],
          "parts": [
            "Next came the low beam and rope. Jo stayed beside the beam as they balanced, then watched them step over the rope.\n\nLeila held the {{c0}} while Sam stepped through. He was already facing the tunnel when he remembered that she had not had a turn.\n\nHe returned, but held the hoop too high. Leila could not step through without catching her {{c1}} on the rim.\n\n\"Lower it a little,\" she asked. Sam listened and steadied the hoop with both hands.\n\nAfter Leila crossed, they talked about their plan for the tunnel. Sam was beginning to notice that helping meant more than simply waiting; it also meant {{c2}}."
          ],
          "columns": [
            "Next came the low beam and rope. Jo stayed beside the beam as they balanced, then watched them step over the rope. Leila held the {{c0}} while Sam stepped through. He was already facing the tunnel when he remembered that she had not had a turn.",
            "He returned, but held the hoop too high. Leila could not step through without catching her {{c1}} on the rim. \"Lower it a little,\" she asked. Sam listened and steadied the hoop with both hands. After Leila crossed, they talked about their plan for the tunnel. Sam was beginning to notice that helping meant more than simply waiting; it also meant {{c2}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hoop",
              "paragraph": 1,
              "prompt": "Leila held the ______ while Sam stepped through. He was already facing the tunnel when he remembered that she had not had a turn."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "foot",
              "paragraph": 2,
              "prompt": "He returned, but held the hoop too high. Leila could not step through without catching her ______ on the rim."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "listening",
              "paragraph": 4,
              "prompt": "After Leila crossed, they talked about their plan for the tunnel. Sam was beginning to notice that helping meant more than simply waiting; it also meant ______."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "listening"
            },
            {
              "id": "w1",
              "word": "foot"
            },
            {
              "id": "w0",
              "word": "hoop"
            }
          ]
        }
      },
      {
        "text": [
          "On the last stretch, they weaved through the zigzag cones side by side.",
          "Leila crawled through the tunnel, while Sam waited at the far end. When she emerged, he asked if she was ready for the last stretch.",
          "They walked between the final cones and touched the yellow flag together. Sam had forgotten to count how long the course took.",
          "Jo asked which part had been hardest. Leila chose the hoop; Sam chose learning to wait. They laughed because both answers were true.",
          "On his map, Sam drew two small figures beside the finish flag. Next time, his plan would make room for both of them."
        ],
        "mc": [
          {
            "prompt": "Why is Sam’s answer about waiting important?",
            "choices": [
              "It shows that his challenge was also about teamwork.",
              "It proves the tunnel was broken.",
              "It means he did not try the log.",
              "It tells us he won a timed race."
            ],
            "answer": 0,
            "skill": "Explain a deeper meaning",
            "evidence": "Sam chose learning to wait"
          },
          {
            "prompt": "What does Sam’s drawing show?",
            "choices": [
              "He wants a longer map.",
              "He has lost the course.",
              "He wants to remove the flag.",
              "He now includes his partner in his goal."
            ],
            "answer": 3,
            "skill": "Infer from an action",
            "evidence": "make room for both of them"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Leila’s hardest part",
              "was the hoop"
            ],
            [
              "Sam’s hardest part",
              "was learning to wait"
            ]
          ],
          "options": [
            "was learning to wait",
            "was the hoop"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Leila’s hardest part was the hoop",
            "Sam’s hardest part was learning to wait"
          ]
        },
        "cloze": {
          "paragraphs": [
            "On the last stretch, they weaved through the zigzag cones side by side.",
            "Leila crawled through the {{c0}}, while Sam waited at the far end. When she emerged, he asked if she was ready for the last stretch.",
            "They walked between the final cones and touched the yellow flag together. Sam had forgotten to count how long the course took.",
            "Jo asked which part had been hardest. Leila chose the hoop; Sam chose learning to {{c1}}. They laughed because both answers were true.",
            "On his map, Sam drew two small figures beside the finish {{c2}}. Next time, his plan would make room for both of them."
          ],
          "parts": [
            "On the last stretch, they weaved through the zigzag cones side by side.\n\nLeila crawled through the {{c0}}, while Sam waited at the far end. When she emerged, he asked if she was ready for the last stretch.\n\nThey walked between the final cones and touched the yellow flag together. Sam had forgotten to count how long the course took.\n\nJo asked which part had been hardest. Leila chose the hoop; Sam chose learning to {{c1}}. They laughed because both answers were true.\n\nOn his map, Sam drew two small figures beside the finish {{c2}}. Next time, his plan would make room for both of them."
          ],
          "columns": [
            "On the last stretch, they weaved through the zigzag cones side by side. Leila crawled through the {{c0}}, while Sam waited at the far end. When she emerged, he asked if she was ready for the last stretch.",
            "They walked between the final cones and touched the yellow flag together. Sam had forgotten to count how long the course took. Jo asked which part had been hardest. Leila chose the hoop; Sam chose learning to {{c1}}. They laughed because both answers were true. On his map, Sam drew two small figures beside the finish {{c2}}. Next time, his plan would make room for both of them."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "tunnel",
              "paragraph": 1,
              "prompt": "Leila crawled through the ______, while Sam waited at the far end. When she emerged, he asked if she was ready for the last stretch."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "wait",
              "paragraph": 3,
              "prompt": "Jo asked which part had been hardest. Leila chose the hoop; Sam chose learning to ______. They laughed because both answers were true."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "flag",
              "paragraph": 4,
              "prompt": "On his map, Sam drew two small figures beside the finish ______. Next time, his plan would make room for both of them."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "flag"
            },
            {
              "id": "w1",
              "word": "wait"
            },
            {
              "id": "w0",
              "word": "tunnel"
            }
          ]
        }
      }
    ],
    "intro": "440 words · 4 reading pages · 3 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "M": {
    "grade": "F&P M target",
    "titles": [
      "A sunny start",
      "Slow feet, steady arms",
      "The hoop problem",
      "A finish for two"
    ],
    "sections": [
      {
        "text": [
          "Sam woke to a sunny Saturday. He walked to Adventure Park with Leila and their guide, Jo, to try the new course. Red cones led past stones, a beam, a low rope, a log, a hoop and a tunnel.",
          "Sam wanted to race ahead. Leila wanted to inspect each obstacle. “Leave room for each other,” Jo said. “Help your partner reach the yellow flag. This isn’t a race.”"
        ],
        "mc": [
          {
            "prompt": "How do the children’s plans differ?",
            "choices": [
              "Both want to skip the log.",
              "Leila wants a timed race; Sam wants to wait.",
              "Both want to move the flag.",
              "Sam wants speed; Leila wants to learn each obstacle."
            ],
            "answer": 3,
            "skill": "Compare viewpoints",
            "evidence": "planned the quickest way"
          },
          {
            "prompt": "Why does Jo ask for space between people?",
            "choices": [
              "So the course looks longer",
              "So the cones can fall over",
              "So each person has room to practise safely",
              "So no one can see the map"
            ],
            "answer": 2,
            "skill": "Infer a reason",
            "evidence": "leave a safe space"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Red cones",
              "marked the route"
            ],
            [
              "The yellow flag",
              "marked the finish"
            ]
          ],
          "options": [
            "marked the finish",
            "marked the route"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Red cones marked the route",
            "The yellow flag marked the finish"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam woke to a sunny Saturday. He walked to Adventure Park with Leila and their guide, Jo, to try the new course. Red cones led past stones, a beam, a low rope, a {{c0}}, a hoop and a tunnel.",
            "Sam wanted to race ahead. Leila wanted to inspect each obstacle. “Leave room for each other,” Jo said. “Help your partner reach the yellow {{c1}}. This isn’t a {{c2}}.”"
          ],
          "parts": [
            "Sam woke to a sunny Saturday. He walked to Adventure Park with Leila and their guide, Jo, to try the new course. Red cones led past stones, a beam, a low rope, a {{c0}}, a hoop and a tunnel.\n\nSam wanted to race ahead. Leila wanted to inspect each obstacle. “Leave room for each other,” Jo said. “Help your partner reach the yellow {{c1}}. This isn’t a {{c2}}.”"
          ],
          "columns": [
            "Sam woke to a sunny Saturday. He walked to Adventure Park with Leila and their guide, Jo, to try the new course. Red cones led past stones, a beam, a low rope, a {{c0}}, a hoop and a tunnel. Sam wanted to race ahead. Leila wanted to inspect each obstacle. “Leave room for each other,” Jo said. “Help your partner reach the yellow {{c1}}. This isn’t a {{c2}}.”",
            ""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "log",
              "paragraph": 0,
              "prompt": "Sam woke to a sunny Saturday. He walked to Adventure Park with Leila and their guide, Jo, to try the new course. Red cones led past stones, a beam, a low rope, a ______, a hoop and a tunnel."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "flag",
              "paragraph": 1,
              "prompt": "Sam wanted to race ahead. Leila wanted to inspect each obstacle. “Leave room for each other,” Jo said. “Help your partner reach the yellow ______. This isn’t a race.”"
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "race",
              "paragraph": 1,
              "prompt": "Sam wanted to race ahead. Leila wanted to inspect each obstacle. “Leave room for each other,” Jo said. “Help your partner reach the yellow flag. This isn’t a ______.”"
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "race"
            },
            {
              "id": "w1",
              "word": "flag"
            },
            {
              "id": "w0",
              "word": "log"
            }
          ]
        }
      },
      {
        "text": [
          "After crossing the stones, Sam watched the flag instead of the log. His foot slipped onto the grass. “Look at the wood,” Leila suggested.",
          "With Jo nearby, he spread his arms and took shorter steps. His new approach worked better than speed. He crossed safely, then waited."
        ],
        "mc": [
          {
            "prompt": "What changes on Sam’s second attempt?",
            "choices": [
              "Leila removes the flag.",
              "The log becomes shorter.",
              "He changes his way of moving and looking.",
              "Jo makes the log wider."
            ],
            "answer": 2,
            "skill": "Connect cause and effect",
            "evidence": "took shorter steps"
          },
          {
            "prompt": "What does “approach” mean here?",
            "choices": [
              "A sound in the park",
              "Way of doing something",
              "A place to sit",
              "A bright colour"
            ],
            "answer": 1,
            "skill": "Use vocabulary in context",
            "evidence": "Changing his approach"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Looking along the log",
              "helped Sam focus"
            ],
            [
              "Spreading his arms",
              "helped him balance"
            ]
          ],
          "options": [
            "helped him balance",
            "helped Sam focus"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Looking along the log helped Sam focus",
            "Spreading his arms helped him balance"
          ]
        },
        "cloze": {
          "paragraphs": [
            "After crossing the stones, Sam watched the {{c0}} instead of the log. His foot slipped onto the grass. “Look at the wood,” Leila suggested.",
            "With Jo nearby, he spread his arms and took shorter {{c1}}. His new approach worked better than {{c2}}. He crossed safely, then waited."
          ],
          "parts": [
            "After crossing the stones, Sam watched the {{c0}} instead of the log. His foot slipped onto the grass. “Look at the wood,” Leila suggested.\n\nWith Jo nearby, he spread his arms and took shorter {{c1}}. His new approach worked better than {{c2}}. He crossed safely, then waited."
          ],
          "columns": [
            "After crossing the stones, Sam watched the {{c0}} instead of the log. His foot slipped onto the grass. “Look at the wood,” Leila suggested. With Jo nearby, he spread his arms and took shorter {{c1}}. His new approach worked better than {{c2}}. He crossed safely, then waited.",
            ""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "flag",
              "paragraph": 0,
              "prompt": "After crossing the stones, Sam watched the ______ instead of the log. His foot slipped onto the grass. “Look at the wood,” Leila suggested."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "steps",
              "paragraph": 1,
              "prompt": "With Jo nearby, he spread his arms and took shorter ______. His new approach worked better than speed. He crossed safely, then waited."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "speed",
              "paragraph": 1,
              "prompt": "With Jo nearby, he spread his arms and took shorter steps. His new approach worked better than ______. He crossed safely, then waited."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "speed"
            },
            {
              "id": "w1",
              "word": "steps"
            },
            {
              "id": "w0",
              "word": "flag"
            }
          ]
        }
      },
      {
        "text": [
          "They crossed the beam and low rope with Jo nearby. Leila held the hoop for Sam. He almost left, then remembered her turn.",
          "Her foot caught the rim. “Move it down, please.” Sam lowered and steadied it. Helping meant listening to what Leila needed."
        ],
        "mc": [
          {
            "prompt": "Why does Leila ask Sam to lower the hoop?",
            "choices": [
              "Jo has asked her to stop.",
              "The rim is too high for her to step over.",
              "She wants to hide the tunnel.",
              "The hoop has a loose wheel."
            ],
            "answer": 1,
            "skill": "Find a reason",
            "evidence": "asked him to move it down"
          },
          {
            "prompt": "What does Sam learn about helping?",
            "choices": [
              "He needs to listen to what his partner needs.",
              "He should always choose the fastest way.",
              "He must do every obstacle for Leila.",
              "He should avoid speaking."
            ],
            "answer": 0,
            "skill": "Explain a lesson",
            "evidence": "listen to what his partner needed"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Sam returned",
              "so Leila could have a turn"
            ],
            [
              "Leila asked",
              "for the hoop to be lower"
            ]
          ],
          "options": [
            "for the hoop to be lower",
            "so Leila could have a turn"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Sam returned so Leila could have a turn",
            "Leila asked for the hoop to be lower"
          ]
        },
        "cloze": {
          "paragraphs": [
            "They crossed the beam and low rope with Jo nearby. Leila held the {{c0}} for Sam. He almost left, then remembered her turn.",
            "Her foot caught the rim. “Move it {{c1}}, please.” Sam lowered and steadied it. Helping meant listening to what Leila {{c2}}."
          ],
          "parts": [
            "They crossed the beam and low rope with Jo nearby. Leila held the {{c0}} for Sam. He almost left, then remembered her turn.\n\nHer foot caught the rim. “Move it {{c1}}, please.” Sam lowered and steadied it. Helping meant listening to what Leila {{c2}}."
          ],
          "columns": [
            "They crossed the beam and low rope with Jo nearby. Leila held the {{c0}} for Sam. He almost left, then remembered her turn. Her foot caught the rim. “Move it {{c1}}, please.” Sam lowered and steadied it. Helping meant listening to what Leila {{c2}}.",
            ""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hoop",
              "paragraph": 0,
              "prompt": "They crossed the beam and low rope with Jo nearby. Leila held the ______ for Sam. He almost left, then remembered her turn."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "down",
              "paragraph": 1,
              "prompt": "Her foot caught the rim. “Move it ______, please.” Sam lowered and steadied it. Helping meant listening to what Leila needed."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "needed",
              "paragraph": 1,
              "prompt": "Her foot caught the rim. “Move it down, please.” Sam lowered and steadied it. Helping meant listening to what Leila ______."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "needed"
            },
            {
              "id": "w1",
              "word": "down"
            },
            {
              "id": "w0",
              "word": "hoop"
            }
          ]
        }
      },
      {
        "text": [
          "On the last stretch, they weaved through the zigzag cones side by side.",
          "Sam waited where Leila could see him as she crawled through the tunnel. They followed the final cones and touched the flag together.",
          "Leila named the hoop as her hardest obstacle; Sam said learning to wait was harder. He drew two people beside the flag. His next plan would include both partners at the finish."
        ],
        "mc": [
          {
            "prompt": "Why is Sam’s answer about waiting important?",
            "choices": [
              "It shows that his challenge was also about teamwork.",
              "It proves the tunnel was broken.",
              "It means he did not try the log.",
              "It tells us he won a timed race."
            ],
            "answer": 0,
            "skill": "Explain a deeper meaning",
            "evidence": "learning to wait had been harder"
          },
          {
            "prompt": "What does Sam’s drawing show?",
            "choices": [
              "He wants a longer map.",
              "He has lost the course.",
              "He wants to remove the flag.",
              "He now includes his partner in his goal."
            ],
            "answer": 3,
            "skill": "Infer from an action",
            "evidence": "included both people"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "Leila’s hardest part",
              "was the hoop"
            ],
            [
              "Sam’s hardest part",
              "was learning to wait"
            ]
          ],
          "options": [
            "was learning to wait",
            "was the hoop"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Leila’s hardest part was the hoop",
            "Sam’s hardest part was learning to wait"
          ]
        },
        "cloze": {
          "paragraphs": [
            "On the last stretch, they weaved through the zigzag cones side by side.",
            "Sam waited where Leila could see him as she crawled through the {{c0}}. They followed the final cones and touched the flag together.",
            "Leila named the {{c1}} as her hardest obstacle; Sam said learning to wait was harder. He drew two people beside the flag. His next plan would include both partners at the {{c2}}."
          ],
          "parts": [
            "On the last stretch, they weaved through the zigzag cones side by side.\n\nSam waited where Leila could see him as she crawled through the {{c0}}. They followed the final cones and touched the flag together.\n\nLeila named the {{c1}} as her hardest obstacle; Sam said learning to wait was harder. He drew two people beside the flag. His next plan would include both partners at the {{c2}}."
          ],
          "columns": [
            "On the last stretch, they weaved through the zigzag cones side by side. Sam waited where Leila could see him as she crawled through the {{c0}}. They followed the final cones and touched the flag together.",
            "Leila named the {{c1}} as her hardest obstacle; Sam said learning to wait was harder. He drew two people beside the flag. His next plan would include both partners at the {{c2}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "tunnel",
              "paragraph": 1,
              "prompt": "Sam waited where Leila could see him as she crawled through the ______. They followed the final cones and touched the flag together."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "hoop",
              "paragraph": 2,
              "prompt": "Leila named the ______ as her hardest obstacle; Sam said learning to wait was harder. He drew two people beside the flag. His next plan would include both partners at the finish."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "finish",
              "paragraph": 2,
              "prompt": "Leila named the hoop as her hardest obstacle; Sam said learning to wait was harder. He drew two people beside the flag. His next plan would include both partners at the ______."
            }
          ],
          "bank": [
            {
              "id": "w2",
              "word": "finish"
            },
            {
              "id": "w1",
              "word": "hoop"
            },
            {
              "id": "w0",
              "word": "tunnel"
            }
          ]
        }
      }
    ],
    "intro": "227 words · 4 reading pages · 3 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "N": {
    "grade": "F&P N target",
    "titles": [
      "A sunny start",
      "A different kind of balance",
      "Holding is not always helping",
      "The missing number"
    ],
    "sections": [
      {
        "text": [
          "Sam woke to sunshine on Saturday. He and Leila walked to Adventure Park with their guide, Jo, to try the new obstacle course. A yellow flag fluttered beyond stepping stones, a beam, a low rope, a log, a hoop and a tunnel.",
          "“Help each other from beginning to end,” Jo said. Sam nodded, but he was already planning to finish first. Leila studied the route and asked who would hold the hoop. Sam turned his head. “Come on!” he called."
        ],
        "mc": [
          {
            "prompt": "Why have Sam and Leila come to Adventure Park?",
            "choices": [
              "To help build a new tunnel.",
              "To watch a running race.",
              "To collect equipment for Jo.",
              "To try the new obstacle course."
            ],
            "answer": 3,
            "skill": "Identify the purpose of an outing",
            "evidence": "try the new obstacle course"
          },
          {
            "prompt": "How are Sam and Leila different?",
            "choices": [
              "He wants to stop while she wants to race.",
              "He has practised while she has never visited a park.",
              "He considers speed while she considers how to participate.",
              "He likes maps while she refuses to read."
            ],
            "answer": 2,
            "skill": "Compare viewpoints",
            "evidence": "how they could take turns"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Sam’s first goal",
              "was to finish first"
            ],
            [
              "Leila’s question",
              "was about sharing the hoop"
            ],
            [
              "Jo’s challenge",
              "required the children to help each other"
            ]
          ],
          "options": [
            "required the children to help each other",
            "was about sharing the hoop",
            "was to finish first"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Sam’s first goal was to finish first",
            "Leila’s question was about sharing the hoop",
            "Jo’s challenge required the children to help each other"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam woke to sunshine on Saturday. He and Leila walked to Adventure Park with their guide, Jo, to try the new obstacle course. A yellow {{c0}} fluttered beyond stepping stones, a beam, a low rope, a log, a {{c1}} and a tunnel.",
            "“Help each other from {{c2}} to end,” Jo said. Sam nodded, but he was already planning to finish first. Leila studied the route and asked who would hold the hoop. Sam turned his {{c3}}. “Come on!” he called."
          ],
          "parts": [
            "Sam woke to sunshine on Saturday. He and Leila walked to Adventure Park with their guide, Jo, to try the new obstacle course. A yellow {{c0}} fluttered beyond stepping stones, a beam, a low rope, a log, a {{c1}} and a tunnel.\n\n“Help each other from {{c2}} to end,” Jo said. Sam nodded, but he was already planning to finish first. Leila studied the route and asked who would hold the hoop. Sam turned his {{c3}}. “Come on!” he called."
          ],
          "columns": [
            "Sam woke to sunshine on Saturday. He and Leila walked to Adventure Park with their guide, Jo, to try the new obstacle course. A yellow {{c0}} fluttered beyond stepping stones, a beam, a low rope, a log, a {{c1}} and a tunnel. “Help each other from {{c2}} to end,” Jo said. Sam nodded, but he was already planning to finish first. Leila studied the route and asked who would hold the hoop. Sam turned his {{c3}}. “Come on!” he called.",
            ""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "flag",
              "paragraph": 0,
              "prompt": "Sam woke to sunshine on Saturday. He and Leila walked to Adventure Park with their guide, Jo, to try the new obstacle course. A yellow ______ fluttered beyond stepping stones, a beam, a low rope, a log, a hoop and a tunnel."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "hoop",
              "paragraph": 0,
              "prompt": "Sam woke to sunshine on Saturday. He and Leila walked to Adventure Park with their guide, Jo, to try the new obstacle course. A yellow flag fluttered beyond stepping stones, a beam, a low rope, a log, a ______ and a tunnel."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "beginning",
              "paragraph": 1,
              "prompt": "“Help each other from ______ to end,” Jo said. Sam nodded, but he was already planning to finish first. Leila studied the route and asked who would hold the hoop. Sam turned his head. “Come on!” he called."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "head",
              "paragraph": 1,
              "prompt": "“Help each other from beginning to end,” Jo said. Sam nodded, but he was already planning to finish first. Leila studied the route and asked who would hold the hoop. Sam turned his ______. “Come on!” he called."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "head"
            },
            {
              "id": "w2",
              "word": "beginning"
            },
            {
              "id": "w1",
              "word": "hoop"
            },
            {
              "id": "w0",
              "word": "flag"
            }
          ]
        }
      },
      {
        "text": [
          "After the stones, Sam hurried onto the log and slipped onto the grass. He hated needing help and almost rejected Leila’s advice. Then he studied the uneven surface.",
          "Shorter steps helped him cross with Jo nearby. Waiting for Leila meant giving up his lead. That felt harder than balance."
        ],
        "mc": [
          {
            "prompt": "Why does Sam nearly reject Leila’s advice?",
            "choices": [
              "He has been asked to leave.",
              "He thinks she is describing a different course.",
              "He feels upset about needing help.",
              "He cannot hear her over a motor."
            ],
            "answer": 2,
            "skill": "Infer an emotion",
            "evidence": "Accepting advice felt harder"
          },
          {
            "prompt": "What does Sam find harder than balancing?",
            "choices": [
              "Walking on the grass",
              "Waiting for Leila instead of staying ahead",
              "Spreading his arms",
              "Finding the yellow flag"
            ],
            "answer": 1,
            "skill": "Explain an internal conflict",
            "evidence": "giving up the lead he had imagined"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The uneven surface",
              "required attention"
            ],
            [
              "Shorter steps",
              "helped Sam cross"
            ],
            [
              "Waiting beside the log",
              "made Sam think about his partner"
            ]
          ],
          "options": [
            "made Sam think about his partner",
            "helped Sam cross",
            "required attention"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The uneven surface required attention",
            "Shorter steps helped Sam cross",
            "Waiting beside the log made Sam think about his partner"
          ]
        },
        "cloze": {
          "paragraphs": [
            "After the stones, Sam hurried onto the {{c0}} and slipped onto the grass. He hated needing help and almost rejected Leila’s advice. Then he studied the uneven {{c1}}.",
            "Shorter {{c2}} helped him cross with Jo nearby. Waiting for Leila meant giving up his lead. That felt harder than {{c3}}."
          ],
          "parts": [
            "After the stones, Sam hurried onto the {{c0}} and slipped onto the grass. He hated needing help and almost rejected Leila’s advice. Then he studied the uneven {{c1}}.\n\nShorter {{c2}} helped him cross with Jo nearby. Waiting for Leila meant giving up his lead. That felt harder than {{c3}}."
          ],
          "columns": [
            "After the stones, Sam hurried onto the {{c0}} and slipped onto the grass. He hated needing help and almost rejected Leila’s advice. Then he studied the uneven {{c1}}. Shorter {{c2}} helped him cross with Jo nearby. Waiting for Leila meant giving up his lead. That felt harder than {{c3}}.",
            ""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "log",
              "paragraph": 0,
              "prompt": "After the stones, Sam hurried onto the ______ and slipped onto the grass. He hated needing help and almost rejected Leila’s advice. Then he studied the uneven surface."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "surface",
              "paragraph": 0,
              "prompt": "After the stones, Sam hurried onto the log and slipped onto the grass. He hated needing help and almost rejected Leila’s advice. Then he studied the uneven ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "steps",
              "paragraph": 1,
              "prompt": "Shorter ______ helped him cross with Jo nearby. Waiting for Leila meant giving up his lead. That felt harder than balance."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "balance",
              "paragraph": 1,
              "prompt": "Shorter steps helped him cross with Jo nearby. Waiting for Leila meant giving up his lead. That felt harder than ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "balance"
            },
            {
              "id": "w2",
              "word": "steps"
            },
            {
              "id": "w1",
              "word": "surface"
            },
            {
              "id": "w0",
              "word": "log"
            }
          ]
        }
      },
      {
        "text": [
          "They crossed the beam and rope with Jo nearby. Sam held the hoop, but Leila’s foot caught its rim. Her shorter height created a different problem.",
          "Sam felt impatient, then listened. He lowered and steadied it. A different action let her step through. He waited for her signal."
        ],
        "mc": [
          {
            "prompt": "Why does the same hoop position not work for Leila?",
            "choices": [
              "Sam is standing inside the tunnel.",
              "She is shorter and needs a lower rim.",
              "She is carrying a heavy bag.",
              "The hoop changes shape."
            ],
            "answer": 1,
            "skill": "Use explicit evidence",
            "evidence": "Leila was shorter"
          },
          {
            "prompt": "Which idea does Sam begin to understand?",
            "choices": [
              "Help should respond to another person’s needs.",
              "Fairness always means doing exactly the same thing.",
              "Only taller people can hold a hoop.",
              "It is better not to ask questions."
            ],
            "answer": 0,
            "skill": "Explain a theme",
            "evidence": "Listening had made his help useful"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Leila’s request",
              "identified the change she needed"
            ],
            [
              "Sam’s first reaction",
              "was impatience"
            ],
            [
              "The lower hoop",
              "allowed Leila to step through"
            ]
          ],
          "options": [
            "allowed Leila to step through",
            "was impatience",
            "identified the change she needed"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Leila’s request identified the change she needed",
            "Sam’s first reaction was impatience",
            "The lower hoop allowed Leila to step through"
          ]
        },
        "cloze": {
          "paragraphs": [
            "They crossed the beam and rope with Jo nearby. Sam held the {{c0}}, but Leila’s foot caught its rim. Her shorter height created a different {{c1}}.",
            "Sam felt impatient, then listened. He lowered and steadied it. A different {{c2}} let her step through. He waited for her {{c3}}."
          ],
          "parts": [
            "They crossed the beam and rope with Jo nearby. Sam held the {{c0}}, but Leila’s foot caught its rim. Her shorter height created a different {{c1}}.\n\nSam felt impatient, then listened. He lowered and steadied it. A different {{c2}} let her step through. He waited for her {{c3}}."
          ],
          "columns": [
            "They crossed the beam and rope with Jo nearby. Sam held the {{c0}}, but Leila’s foot caught its rim. Her shorter height created a different {{c1}}. Sam felt impatient, then listened. He lowered and steadied it. A different {{c2}} let her step through. He waited for her {{c3}}.",
            ""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hoop",
              "paragraph": 0,
              "prompt": "They crossed the beam and rope with Jo nearby. Sam held the ______, but Leila’s foot caught its rim. Her shorter height created a different problem."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "problem",
              "paragraph": 0,
              "prompt": "They crossed the beam and rope with Jo nearby. Sam held the hoop, but Leila’s foot caught its rim. Her shorter height created a different ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "action",
              "paragraph": 1,
              "prompt": "Sam felt impatient, then listened. He lowered and steadied it. A different ______ let her step through. He waited for her signal."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "signal",
              "paragraph": 1,
              "prompt": "Sam felt impatient, then listened. He lowered and steadied it. A different action let her step through. He waited for her ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "signal"
            },
            {
              "id": "w2",
              "word": "action"
            },
            {
              "id": "w1",
              "word": "problem"
            },
            {
              "id": "w0",
              "word": "hoop"
            }
          ]
        }
      },
      {
        "text": [
          "Sam waited until Leila came out of the tunnel. They weaved through the cones and reached the flag together. “I kept making it a race,” Sam admitted.",
          "Jo left the time box empty. Her notes recorded smaller steps, a lower hoop and listening. Sam drew two partners beside the flag, neither in front."
        ],
        "mc": [
          {
            "prompt": "Why does the empty time box matter?",
            "choices": [
              "It emphasises progress that cannot be described by speed alone.",
              "It shows that Jo forgot the whole activity.",
              "It proves that the children did not finish.",
              "It means the course will be cancelled."
            ],
            "answer": 0,
            "skill": "Interpret a significant detail",
            "evidence": "It no longer seemed to be missing anything"
          },
          {
            "prompt": "How has Sam changed by the end?",
            "choices": [
              "He believes he should do the course alone.",
              "He thinks Leila should always follow him.",
              "He decides that practice cannot help.",
              "He values listening and shared progress as well as finishing."
            ],
            "answer": 3,
            "skill": "Trace character development",
            "evidence": "time to listen"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The clipboard notes",
              "recorded changes the children made"
            ],
            [
              "The empty time box",
              "left speed unranked"
            ],
            [
              "The two figures",
              "showed a shared finish"
            ]
          ],
          "options": [
            "showed a shared finish",
            "left speed unranked",
            "recorded changes the children made"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The clipboard notes recorded changes the children made",
            "The empty time box left speed unranked",
            "The two figures showed a shared finish"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam waited until Leila {{c0}} of the tunnel. They weaved through the cones and reached the flag together. “I kept making it a {{c1}},” Sam admitted.",
            "Jo left the time box empty. Her notes recorded smaller steps, a lower hoop and listening. Sam drew two partners beside the {{c2}}, neither in {{c3}}."
          ],
          "parts": [
            "Sam waited until Leila {{c0}} of the tunnel. They weaved through the cones and reached the flag together. “I kept making it a {{c1}},” Sam admitted.\n\nJo left the time box empty. Her notes recorded smaller steps, a lower hoop and listening. Sam drew two partners beside the {{c2}}, neither in {{c3}}."
          ],
          "columns": [
            "Sam waited until Leila {{c0}} of the tunnel. They weaved through the cones and reached the flag together. “I kept making it a {{c1}},” Sam admitted. Jo left the time box empty. Her notes recorded smaller steps, a lower hoop and listening. Sam drew two partners beside the {{c2}}, neither in {{c3}}.",
            ""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "came out",
              "paragraph": 0,
              "prompt": "Sam waited until Leila ______ of the tunnel. They weaved through the cones and reached the flag together. “I kept making it a race,” Sam admitted."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "race",
              "paragraph": 0,
              "prompt": "Sam waited until Leila came out of the tunnel. They weaved through the cones and reached the flag together. “I kept making it a ______,” Sam admitted."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "flag",
              "paragraph": 1,
              "prompt": "Jo left the time box empty. Her notes recorded smaller steps, a lower hoop and listening. Sam drew two partners beside the ______, neither in front."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "front",
              "paragraph": 1,
              "prompt": "Jo left the time box empty. Her notes recorded smaller steps, a lower hoop and listening. Sam drew two partners beside the flag, neither in ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "front"
            },
            {
              "id": "w2",
              "word": "flag"
            },
            {
              "id": "w1",
              "word": "race"
            },
            {
              "id": "w0",
              "word": "came out"
            }
          ]
        }
      }
    ],
    "intro": "230 words · 4 reading pages · 4 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "P": {
    "grade": "F&P P target",
    "titles": [
      "A sunny start",
      "Reading the course card",
      "A quick beginning",
      "A different kind of balance",
      "The view from beside the log",
      "Ready means ready for whom?",
      "Holding is not always helping",
      "Light at the far end",
      "The last few cones",
      "The missing number"
    ],
    "sections": [
      {
        "text": [
          "Sam woke to sunshine on Saturday morning. He packed his water bottle and walked to Adventure Park with Leila and their guide, Jo. Today they were trying the new obstacle course.",
          "Beyond the gate were stepping stones, a low rope, a balance beam, a log, a hoop and a tunnel. Red cones led to a yellow flag at the finish. “Some parts require a partner,” Jo said. “Help each other along the way.” Sam hurried towards the start, eager to save seconds. “Wait!” Leila called. “Who’s holding the hoop first?”"
        ],
        "mc": [
          {
            "prompt": "Why have Sam and Leila come to Adventure Park?",
            "choices": [
              "To help build a new tunnel.",
              "To watch a running race.",
              "To collect equipment for Jo.",
              "To try the new obstacle course."
            ],
            "answer": 3,
            "skill": "Identify the purpose of an outing",
            "evidence": "try the new obstacle course"
          },
          {
            "prompt": "How are Sam and Leila different?",
            "choices": [
              "He wants to stop while she wants to race.",
              "He has practised while she has never visited a park.",
              "He considers speed while she considers how to participate.",
              "He likes maps while she refuses to read."
            ],
            "answer": 2,
            "skill": "Compare viewpoints",
            "evidence": "studied the same course differently"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Sam’s first goal",
              "was to finish first"
            ],
            [
              "Leila’s question",
              "was about sharing the hoop"
            ],
            [
              "Jo’s challenge",
              "required the children to help each other"
            ]
          ],
          "options": [
            "required the children to help each other",
            "was about sharing the hoop",
            "was to finish first"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Sam’s first goal was to finish first",
            "Leila’s question was about sharing the hoop",
            "Jo’s challenge required the children to help each other"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam woke to sunshine on Saturday morning. He packed his water bottle and walked to Adventure Park with Leila and their guide, Jo. Today they were trying the new obstacle course.",
            "Beyond the gate were stepping stones, a low rope, a balance beam, a log, a {{c0}} and a tunnel. Red cones led to a yellow flag at the {{c1}}. “Some parts {{c2}} a partner,” Jo said. “Help each other along the way.” Sam hurried towards the start, eager to save {{c3}}. “Wait!” Leila called. “Who’s holding the hoop first?”"
          ],
          "parts": [
            "Sam woke to sunshine on Saturday morning. He packed his water bottle and walked to Adventure Park with Leila and their guide, Jo. Today they were trying the new obstacle course.\n\nBeyond the gate were stepping stones, a low rope, a balance beam, a log, a {{c0}} and a tunnel. Red cones led to a yellow flag at the {{c1}}. “Some parts {{c2}} a partner,” Jo said. “Help each other along the way.” Sam hurried towards the start, eager to save {{c3}}. “Wait!” Leila called. “Who’s holding the hoop first?”"
          ],
          "columns": [
            "Sam woke to sunshine on Saturday morning. He packed his water bottle and walked to Adventure Park with Leila and their guide, Jo. Today they were trying the new obstacle course. Beyond the gate were stepping stones, a low rope, a balance beam, a log, a {{c0}} and a tunnel. Red cones led to a yellow flag at the {{c1}}. “Some parts {{c2}} a partner,” Jo said. “Help each other along the way.” Sam hurried towards the start, eager to save {{c3}}. “Wait!” Leila called. “Who’s holding the hoop first?”",
            ""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hoop",
              "paragraph": 1,
              "prompt": "Beyond the gate were stepping stones, a low rope, a balance beam, a log, a ______ and a tunnel. Red cones led to a yellow flag at the finish. “Some parts require a partner,” Jo said. “Help each other along the way.” Sam hurried towards the start, eager to save seconds. “Wait!” Leila called. “Who’s holding the hoop first?”"
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "finish",
              "paragraph": 1,
              "prompt": "Beyond the gate were stepping stones, a low rope, a balance beam, a log, a hoop and a tunnel. Red cones led to a yellow flag at the ______. “Some parts require a partner,” Jo said. “Help each other along the way.” Sam hurried towards the start, eager to save seconds. “Wait!” Leila called. “Who’s holding the hoop first?”"
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "require",
              "paragraph": 1,
              "prompt": "Beyond the gate were stepping stones, a low rope, a balance beam, a log, a hoop and a tunnel. Red cones led to a yellow flag at the finish. “Some parts ______ a partner,” Jo said. “Help each other along the way.” Sam hurried towards the start, eager to save seconds. “Wait!” Leila called. “Who’s holding the hoop first?”"
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "seconds",
              "paragraph": 1,
              "prompt": "Beyond the gate were stepping stones, a low rope, a balance beam, a log, a hoop and a tunnel. Red cones led to a yellow flag at the finish. “Some parts require a partner,” Jo said. “Help each other along the way.” Sam hurried towards the start, eager to save ______. “Wait!” Leila called. “Who’s holding the hoop first?”"
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "seconds"
            },
            {
              "id": "w2",
              "word": "require"
            },
            {
              "id": "w1",
              "word": "finish"
            },
            {
              "id": "w0",
              "word": "hoop"
            }
          ]
        }
      },
      {
        "text": [
          "Leila placed the course card on a bench. Red cones linked the stepping stones, beam, low rope, log, hoop, tunnel and flag. Sam traced the quickest route; Leila noticed waiting spaces. Their ideas of progress differed.",
          "Jo heard both explanations: where to go, and how to leave room. Both mattered. Sam marked the hoop because someone must hold it. He thought taking turns would be easy to remember."
        ],
        "mc": [
          {
            "prompt": "What does Leila notice that Sam first overlooks?",
            "choices": [
              "A hidden shortcut through a tree",
              "A missing racing clock",
              "Places where a partner may need to wait",
              "A second finish line"
            ],
            "answer": 2,
            "skill": "Compare observations",
            "evidence": "spaces where a partner might need to wait"
          },
          {
            "prompt": "Why are both explanations useful?",
            "choices": [
              "They prove the course is a race.",
              "They describe different parts of the shared task.",
              "They give two unrelated routes.",
              "They remove the need to practise."
            ],
            "answer": 1,
            "skill": "Combine ideas",
            "evidence": "neither was the whole plan"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Red cones",
              "connected the stations"
            ],
            [
              "Sam explained",
              "where to go"
            ],
            [
              "Leila explained",
              "how to leave room"
            ]
          ],
          "options": [
            "how to leave room",
            "where to go",
            "connected the stations"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Red cones connected the stations",
            "Sam explained where to go",
            "Leila explained how to leave room"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Leila placed the course card on a bench. Red {{c0}} linked the stepping stones, beam, low rope, log, hoop, tunnel and flag. Sam traced the quickest route; Leila noticed waiting spaces. Their ideas of {{c1}} differed.",
            "Jo heard both explanations: where to go, and how to leave room. Both mattered. Sam marked the hoop because someone must {{c2}} it. He thought taking turns would be easy to {{c3}}."
          ],
          "parts": [
            "Leila placed the course card on a bench. Red {{c0}} linked the stepping stones, beam, low rope, log, hoop, tunnel and flag. Sam traced the quickest route; Leila noticed waiting spaces. Their ideas of {{c1}} differed.\n\nJo heard both explanations: where to go, and how to leave room. Both mattered. Sam marked the hoop because someone must {{c2}} it. He thought taking turns would be easy to {{c3}}."
          ],
          "columns": [
            "Leila placed the course card on a bench. Red {{c0}} linked the stepping stones, beam, low rope, log, hoop, tunnel and flag. Sam traced the quickest route; Leila noticed waiting spaces. Their ideas of {{c1}} differed. Jo heard both explanations: where to go, and how to leave room. Both mattered. Sam marked the hoop because someone must {{c2}} it. He thought taking turns would be easy to {{c3}}.",
            ""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "cones",
              "paragraph": 0,
              "prompt": "Leila placed the course card on a bench. Red ______ linked the stepping stones, beam, low rope, log, hoop, tunnel and flag. Sam traced the quickest route; Leila noticed waiting spaces. Their ideas of progress differed."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "progress",
              "paragraph": 0,
              "prompt": "Leila placed the course card on a bench. Red cones linked the stepping stones, beam, low rope, log, hoop, tunnel and flag. Sam traced the quickest route; Leila noticed waiting spaces. Their ideas of ______ differed."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "hold",
              "paragraph": 1,
              "prompt": "Jo heard both explanations: where to go, and how to leave room. Both mattered. Sam marked the hoop because someone must ______ it. He thought taking turns would be easy to remember."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "remember",
              "paragraph": 1,
              "prompt": "Jo heard both explanations: where to go, and how to leave room. Both mattered. Sam marked the hoop because someone must hold it. He thought taking turns would be easy to ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "remember"
            },
            {
              "id": "w2",
              "word": "hold"
            },
            {
              "id": "w1",
              "word": "progress"
            },
            {
              "id": "w0",
              "word": "cones"
            }
          ]
        }
      },
      {
        "text": [
          "First they crossed the stepping stones, leaving room between them.",
          "Sam began in three quick steps, while Leila checked where her feet would go. His question about her slowness sounded impatient. He assumed the log needed little planning.",
          "Jo kept room beside it for stepping safely onto grass and told them to wait for her signal. Still watching the flag, Sam prepared to cross without looking closely. Leila stood clear of his first step."
        ],
        "mc": [
          {
            "prompt": "Why is Leila moving steadily?",
            "choices": [
              "She is waiting for a race to start.",
              "She is planning where to place her feet.",
              "She wants to hide the course card.",
              "She has already finished the activity."
            ],
            "answer": 1,
            "skill": "Find a reason",
            "evidence": "see where she would place her feet"
          },
          {
            "prompt": "What does Sam’s attention to the flag suggest?",
            "choices": [
              "He may overlook details of the log.",
              "He has checked every part carefully.",
              "He wants Leila to carry him.",
              "He thinks Jo has moved the finish."
            ],
            "answer": 0,
            "skill": "Infer from attention",
            "evidence": "had not yet looked at closely"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Sam’s question",
              "sounded impatient"
            ],
            [
              "The grass beside the log",
              "gave room to step off"
            ],
            [
              "Jo’s signal",
              "showed when to begin"
            ]
          ],
          "options": [
            "showed when to begin",
            "gave room to step off",
            "sounded impatient"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Sam’s question sounded impatient",
            "The grass beside the log gave room to step off",
            "Jo’s signal showed when to begin"
          ]
        },
        "cloze": {
          "paragraphs": [
            "First they crossed the stepping stones, leaving room between them.",
            "Sam began in three quick {{c0}}, while Leila checked where her feet would go. His question about her slowness sounded impatient. He assumed the log needed little {{c1}}.",
            "Jo kept room beside it for stepping safely onto grass and told them to wait for her signal. Still watching the flag, Sam prepared to cross without looking {{c2}}. Leila stood clear of his first {{c3}}."
          ],
          "parts": [
            "First they crossed the stepping stones, leaving room between them.\n\nSam began in three quick {{c0}}, while Leila checked where her feet would go. His question about her slowness sounded impatient. He assumed the log needed little {{c1}}.\n\nJo kept room beside it for stepping safely onto grass and told them to wait for her signal. Still watching the flag, Sam prepared to cross without looking {{c2}}. Leila stood clear of his first {{c3}}."
          ],
          "columns": [
            "First they crossed the stepping stones, leaving room between them. Sam began in three quick {{c0}}, while Leila checked where her feet would go. His question about her slowness sounded impatient. He assumed the log needed little {{c1}}.",
            "Jo kept room beside it for stepping safely onto grass and told them to wait for her signal. Still watching the flag, Sam prepared to cross without looking {{c2}}. Leila stood clear of his first {{c3}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "steps",
              "paragraph": 1,
              "prompt": "Sam began in three quick ______, while Leila checked where her feet would go. His question about her slowness sounded impatient. He assumed the log needed little planning."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "planning",
              "paragraph": 1,
              "prompt": "Sam began in three quick steps, while Leila checked where her feet would go. His question about her slowness sounded impatient. He assumed the log needed little ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "closely",
              "paragraph": 2,
              "prompt": "Jo kept room beside it for stepping safely onto grass and told them to wait for her signal. Still watching the flag, Sam prepared to cross without looking ______. Leila stood clear of his first step."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "step",
              "paragraph": 2,
              "prompt": "Jo kept room beside it for stepping safely onto grass and told them to wait for her signal. Still watching the flag, Sam prepared to cross without looking closely. Leila stood clear of his first ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "step"
            },
            {
              "id": "w2",
              "word": "closely"
            },
            {
              "id": "w1",
              "word": "planning"
            },
            {
              "id": "w0",
              "word": "steps"
            }
          ]
        }
      },
      {
        "text": [
          "Watching the flag, Sam hurried onto the log and slipped onto the grass. He nearly rejected Leila’s advice because he disliked needing help. Then he noticed the uneven surface.",
          "With Jo nearby, he used shorter steps, spread his arms and crossed safely. Leila waited for his nod. Staying to watch her felt harder than balancing: he must surrender his imagined lead and notice her careful foot."
        ],
        "mc": [
          {
            "prompt": "Why does Sam nearly reject Leila’s advice?",
            "choices": [
              "He has been asked to leave.",
              "He thinks she is describing a different course.",
              "He feels defensive about needing help.",
              "He cannot hear her over a motor."
            ],
            "answer": 2,
            "skill": "Infer an emotion",
            "evidence": "almost replied that he knew how to walk"
          },
          {
            "prompt": "What does Sam find harder than balancing?",
            "choices": [
              "Walking on the grass",
              "Giving up his imagined lead to wait for Leila",
              "Spreading his arms",
              "Finding the yellow flag"
            ],
            "answer": 1,
            "skill": "Explain an internal conflict",
            "evidence": "setting aside his own imagined lead"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The uneven surface",
              "required attention"
            ],
            [
              "Shorter steps",
              "helped Sam cross"
            ],
            [
              "Waiting beside the log",
              "challenged Sam’s priorities"
            ]
          ],
          "options": [
            "challenged Sam’s priorities",
            "helped Sam cross",
            "required attention"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The uneven surface required attention",
            "Shorter steps helped Sam cross",
            "Waiting beside the log challenged Sam’s priorities"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Watching the flag, Sam hurried onto the {{c0}} and slipped onto the grass. He nearly rejected Leila’s advice because he disliked needing help. Then he noticed the uneven {{c1}}.",
            "With Jo nearby, he used shorter steps, spread his arms and crossed safely. Leila waited for his nod. Staying to watch her felt harder than balancing: he must surrender his imagined {{c2}} and notice her careful {{c3}}."
          ],
          "parts": [
            "Watching the flag, Sam hurried onto the {{c0}} and slipped onto the grass. He nearly rejected Leila’s advice because he disliked needing help. Then he noticed the uneven {{c1}}.\n\nWith Jo nearby, he used shorter steps, spread his arms and crossed safely. Leila waited for his nod. Staying to watch her felt harder than balancing: he must surrender his imagined {{c2}} and notice her careful {{c3}}."
          ],
          "columns": [
            "Watching the flag, Sam hurried onto the {{c0}} and slipped onto the grass. He nearly rejected Leila’s advice because he disliked needing help. Then he noticed the uneven {{c1}}. With Jo nearby, he used shorter steps, spread his arms and crossed safely. Leila waited for his nod. Staying to watch her felt harder than balancing: he must surrender his imagined {{c2}} and notice her careful {{c3}}.",
            ""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "log",
              "paragraph": 0,
              "prompt": "Watching the flag, Sam hurried onto the ______ and slipped onto the grass. He nearly rejected Leila’s advice because he disliked needing help. Then he noticed the uneven surface."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "surface",
              "paragraph": 0,
              "prompt": "Watching the flag, Sam hurried onto the log and slipped onto the grass. He nearly rejected Leila’s advice because he disliked needing help. Then he noticed the uneven ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "lead",
              "paragraph": 1,
              "prompt": "With Jo nearby, he used shorter steps, spread his arms and crossed safely. Leila waited for his nod. Staying to watch her felt harder than balancing: he must surrender his imagined ______ and notice her careful foot."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "foot",
              "paragraph": 1,
              "prompt": "With Jo nearby, he used shorter steps, spread his arms and crossed safely. Leila waited for his nod. Staying to watch her felt harder than balancing: he must surrender his imagined lead and notice her careful ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "foot"
            },
            {
              "id": "w2",
              "word": "lead"
            },
            {
              "id": "w1",
              "word": "surface"
            },
            {
              "id": "w0",
              "word": "log"
            }
          ]
        }
      },
      {
        "text": [
          "Sam watched Leila’s feet adjust to the log. He almost repeated her advice, but another voice might distract someone already moving carefully.",
          "Afterwards, he asked which patch needed most attention. She identified a raised section where she had paused. Watching had revealed her decisions, rather than simply her slower speed. Together they followed the next red cone towards the hoop.",
          "Next they balanced along the low beam, then stepped over the rope. Jo stayed beside them."
        ],
        "mc": [
          {
            "prompt": "Why does Sam decide not to call out advice?",
            "choices": [
              "He wants her to step off the log.",
              "He has forgotten where she is.",
              "Jo has cancelled the next station.",
              "It might distract Leila when she is already being careful."
            ],
            "answer": 3,
            "skill": "Infer a thoughtful choice",
            "evidence": "another voice might distract her"
          },
          {
            "prompt": "How does watching change Sam’s understanding?",
            "choices": [
              "He learns that the course has two finish flags.",
              "He thinks taking turns means staying silent forever.",
              "He notices the decisions behind Leila’s careful movement.",
              "He decides that the log is no longer useful."
            ],
            "answer": 2,
            "skill": "Explain a change in viewpoint",
            "evidence": "a partner making decisions"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Leila’s pause",
              "was near a raised patch"
            ],
            [
              "Sam’s question",
              "asked about attention"
            ],
            [
              "The next cone",
              "led towards the hoop"
            ]
          ],
          "options": [
            "led towards the hoop",
            "asked about attention",
            "was near a raised patch"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Leila’s pause was near a raised patch",
            "Sam’s question asked about attention",
            "The next cone led towards the hoop"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Sam watched Leila’s {{c0}} adjust to the log. He almost repeated her advice, but another voice might distract someone already moving carefully.",
            "Afterwards, he asked which patch needed most {{c1}}. She identified a raised section where she had paused. Watching had revealed her decisions, rather than simply her slower speed. Together they followed the next red {{c2}} towards the {{c3}}.",
            "Next they balanced along the low beam, then stepped over the rope. Jo stayed beside them."
          ],
          "parts": [
            "Sam watched Leila’s {{c0}} adjust to the log. He almost repeated her advice, but another voice might distract someone already moving carefully.\n\nAfterwards, he asked which patch needed most {{c1}}. She identified a raised section where she had paused. Watching had revealed her decisions, rather than simply her slower speed. Together they followed the next red {{c2}} towards the {{c3}}.\n\nNext they balanced along the low beam, then stepped over the rope. Jo stayed beside them."
          ],
          "columns": [
            "Sam watched Leila’s {{c0}} adjust to the log. He almost repeated her advice, but another voice might distract someone already moving carefully. Afterwards, he asked which patch needed most {{c1}}. She identified a raised section where she had paused. Watching had revealed her decisions, rather than simply her slower speed. Together they followed the next red {{c2}} towards the {{c3}}.",
            "Next they balanced along the low beam, then stepped over the rope. Jo stayed beside them."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "feet",
              "paragraph": 0,
              "prompt": "Sam watched Leila’s ______ adjust to the log. He almost repeated her advice, but another voice might distract someone already moving carefully."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "attention",
              "paragraph": 1,
              "prompt": "Afterwards, he asked which patch needed most ______. She identified a raised section where she had paused. Watching had revealed her decisions, rather than simply her slower speed. Together they followed the next red cone towards the hoop."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "cone",
              "paragraph": 1,
              "prompt": "Afterwards, he asked which patch needed most attention. She identified a raised section where she had paused. Watching had revealed her decisions, rather than simply her slower speed. Together they followed the next red ______ towards the hoop."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "hoop",
              "paragraph": 1,
              "prompt": "Afterwards, he asked which patch needed most attention. She identified a raised section where she had paused. Watching had revealed her decisions, rather than simply her slower speed. Together they followed the next red cone towards the ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "hoop"
            },
            {
              "id": "w2",
              "word": "cone"
            },
            {
              "id": "w1",
              "word": "attention"
            },
            {
              "id": "w0",
              "word": "feet"
            }
          ]
        }
      },
      {
        "text": [
          "Leila held the yellow hoop steady and asked if Sam was ready. Her holding and his stepping had to work together. Jo kept the space clear for one turn at a time.",
          "Sam promised to return and hold it for Leila. Looking towards the tunnel, he realised that remembering this while approaching the next obstacle would demand more attention than making a promise while standing still."
        ],
        "mc": [
          {
            "prompt": "Why does Leila ask if Sam is ready?",
            "choices": [
              "She has finished the whole course.",
              "She is asking Sam to hold the flag.",
              "Their two jobs need to work together.",
              "She wants to change the route."
            ],
            "answer": 2,
            "skill": "Connect actions and purpose",
            "evidence": "both jobs needed to work together"
          },
          {
            "prompt": "What challenge does the ending suggest?",
            "choices": [
              "Jo will start timing the course.",
              "Sam may forget his promise when he moves on.",
              "The tunnel will change into a log.",
              "Leila will remove the finish flag."
            ],
            "answer": 1,
            "skill": "Use a clue to predict",
            "evidence": "already moving towards the next obstacle"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "Leila’s job",
              "was to hold the hoop steady"
            ],
            [
              "Sam’s promise",
              "was to return for Leila’s turn"
            ],
            [
              "The tunnel",
              "was the next obstacle"
            ]
          ],
          "options": [
            "was the next obstacle",
            "was to return for Leila’s turn",
            "was to hold the hoop steady"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Leila’s job was to hold the hoop steady",
            "Sam’s promise was to return for Leila’s turn",
            "The tunnel was the next obstacle"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Leila held the yellow {{c0}} steady and asked if Sam was ready. Her holding and his stepping had to work {{c1}}. Jo kept the space clear for one turn at a time.",
            "Sam promised to return and hold it for Leila. Looking towards the tunnel, he realised that remembering this while approaching the next {{c2}} would demand more {{c3}} than making a promise while standing still."
          ],
          "parts": [
            "Leila held the yellow {{c0}} steady and asked if Sam was ready. Her holding and his stepping had to work {{c1}}. Jo kept the space clear for one turn at a time.\n\nSam promised to return and hold it for Leila. Looking towards the tunnel, he realised that remembering this while approaching the next {{c2}} would demand more {{c3}} than making a promise while standing still."
          ],
          "columns": [
            "Leila held the yellow {{c0}} steady and asked if Sam was ready. Her holding and his stepping had to work {{c1}}. Jo kept the space clear for one turn at a time. Sam promised to return and hold it for Leila. Looking towards the tunnel, he realised that remembering this while approaching the next {{c2}} would demand more {{c3}} than making a promise while standing still.",
            ""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hoop",
              "paragraph": 0,
              "prompt": "Leila held the yellow ______ steady and asked if Sam was ready. Her holding and his stepping had to work together. Jo kept the space clear for one turn at a time."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "together",
              "paragraph": 0,
              "prompt": "Leila held the yellow hoop steady and asked if Sam was ready. Her holding and his stepping had to work ______. Jo kept the space clear for one turn at a time."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "obstacle",
              "paragraph": 1,
              "prompt": "Sam promised to return and hold it for Leila. Looking towards the tunnel, he realised that remembering this while approaching the next ______ would demand more attention than making a promise while standing still."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "attention",
              "paragraph": 1,
              "prompt": "Sam promised to return and hold it for Leila. Looking towards the tunnel, he realised that remembering this while approaching the next obstacle would demand more ______ than making a promise while standing still."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "attention"
            },
            {
              "id": "w2",
              "word": "obstacle"
            },
            {
              "id": "w1",
              "word": "together"
            },
            {
              "id": "w0",
              "word": "hoop"
            }
          ]
        }
      },
      {
        "text": [
          "After stepping through the hoop, Sam needed Leila’s reminder to return. Her foot caught its rim at his stepping height. His first feeling was impatience; then he noticed that she was shorter.",
          "Sam lowered the hoop and steadied it with both hands. She passed through easily. Help must fit its receiver, rather than merely seem helpful from his perspective. He waited for her signal."
        ],
        "mc": [
          {
            "prompt": "Why does the same hoop position not work for Leila?",
            "choices": [
              "Sam is standing inside the tunnel.",
              "She is shorter and needs a lower rim.",
              "She is carrying a heavy bag.",
              "The hoop changes shape."
            ],
            "answer": 1,
            "skill": "Use explicit evidence",
            "evidence": "Leila was shorter"
          },
          {
            "prompt": "Which idea does Sam begin to understand?",
            "choices": [
              "Help should respond to another person’s needs.",
              "Fairness always means doing exactly the same thing.",
              "Only taller people can hold a hoop.",
              "It is better not to ask questions."
            ],
            "answer": 0,
            "skill": "Explain a theme",
            "evidence": "fit the person receiving it"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Leila’s request",
              "identified the change she needed"
            ],
            [
              "Sam’s first reaction",
              "was impatience"
            ],
            [
              "The lower hoop",
              "allowed Leila to step through"
            ]
          ],
          "options": [
            "allowed Leila to step through",
            "was impatience",
            "identified the change she needed"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Leila’s request identified the change she needed",
            "Sam’s first reaction was impatience",
            "The lower hoop allowed Leila to step through"
          ]
        },
        "cloze": {
          "paragraphs": [
            "After stepping through the {{c0}}, Sam needed Leila’s reminder to return. Her foot caught its rim at his stepping height. His first feeling was {{c1}}; then he noticed that she was shorter.",
            "Sam lowered the hoop and steadied it with both hands. She passed through easily. Help must fit its receiver, rather than merely seem helpful from his {{c2}}. He waited for her {{c3}}."
          ],
          "parts": [
            "After stepping through the {{c0}}, Sam needed Leila’s reminder to return. Her foot caught its rim at his stepping height. His first feeling was {{c1}}; then he noticed that she was shorter.\n\nSam lowered the hoop and steadied it with both hands. She passed through easily. Help must fit its receiver, rather than merely seem helpful from his {{c2}}. He waited for her {{c3}}."
          ],
          "columns": [
            "After stepping through the {{c0}}, Sam needed Leila’s reminder to return. Her foot caught its rim at his stepping height. His first feeling was {{c1}}; then he noticed that she was shorter. Sam lowered the hoop and steadied it with both hands. She passed through easily. Help must fit its receiver, rather than merely seem helpful from his {{c2}}. He waited for her {{c3}}.",
            ""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hoop",
              "paragraph": 0,
              "prompt": "After stepping through the ______, Sam needed Leila’s reminder to return. Her foot caught its rim at his stepping height. His first feeling was impatience; then he noticed that she was shorter."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "impatience",
              "paragraph": 0,
              "prompt": "After stepping through the hoop, Sam needed Leila’s reminder to return. Her foot caught its rim at his stepping height. His first feeling was ______; then he noticed that she was shorter."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "perspective",
              "paragraph": 1,
              "prompt": "Sam lowered the hoop and steadied it with both hands. She passed through easily. Help must fit its receiver, rather than merely seem helpful from his ______. He waited for her signal."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "signal",
              "paragraph": 1,
              "prompt": "Sam lowered the hoop and steadied it with both hands. She passed through easily. Help must fit its receiver, rather than merely seem helpful from his perspective. He waited for her ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "signal"
            },
            {
              "id": "w2",
              "word": "perspective"
            },
            {
              "id": "w1",
              "word": "impatience"
            },
            {
              "id": "w0",
              "word": "hoop"
            }
          ]
        }
      },
      {
        "text": [
          "Leila studied the tunnel entrance and the light beyond it. Instead of calling it easy, Sam asked what would help. She needed to know where he would wait.",
          "Jo checked the tunnel. Sam stood where Leila could see his shoes, then moved aside to leave room to come out. His useful job was to keep that space clear until the end and watch for her signal."
        ],
        "mc": [
          {
            "prompt": "What helps Leila prepare for the tunnel?",
            "choices": [
              "Knowing where Sam will wait and seeing the exit",
              "Being told to hurry",
              "Moving the finish flag closer",
              "Asking Sam to block the opening"
            ],
            "answer": 0,
            "skill": "Connect a need to a response",
            "evidence": "see where he would wait"
          },
          {
            "prompt": "What does Sam learn about helping here?",
            "choices": [
              "He must complete Leila’s turn for her.",
              "He should avoid asking what she needs.",
              "The quickest response is always the best.",
              "Doing the agreed job can be more useful than doing extra things."
            ],
            "answer": 3,
            "skill": "Explain a lesson",
            "evidence": "resisting the urge to do more"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Jo checked",
              "that the tunnel was clear"
            ],
            [
              "Sam stood",
              "to the side of the exit"
            ],
            [
              "Leila’s signal",
              "would show she had reached the end"
            ]
          ],
          "options": [
            "would show she had reached the end",
            "to the side of the exit",
            "that the tunnel was clear"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Jo checked that the tunnel was clear",
            "Sam stood to the side of the exit",
            "Leila’s signal would show she had reached the end"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Leila studied the tunnel entrance and the {{c0}} beyond it. Instead of calling it easy, Sam asked what would help. She needed to know where he would wait.",
            "Jo checked the tunnel. Sam stood where Leila could see his shoes, then moved aside to leave room to come {{c1}}. His useful job was to keep that space clear until the {{c2}} and watch for her {{c3}}."
          ],
          "parts": [
            "Leila studied the tunnel entrance and the {{c0}} beyond it. Instead of calling it easy, Sam asked what would help. She needed to know where he would wait.\n\nJo checked the tunnel. Sam stood where Leila could see his shoes, then moved aside to leave room to come {{c1}}. His useful job was to keep that space clear until the {{c2}} and watch for her {{c3}}."
          ],
          "columns": [
            "Leila studied the tunnel entrance and the {{c0}} beyond it. Instead of calling it easy, Sam asked what would help. She needed to know where he would wait. Jo checked the tunnel. Sam stood where Leila could see his shoes, then moved aside to leave room to come {{c1}}. His useful job was to keep that space clear until the {{c2}} and watch for her {{c3}}.",
            ""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "light",
              "paragraph": 0,
              "prompt": "Leila studied the tunnel entrance and the ______ beyond it. Instead of calling it easy, Sam asked what would help. She needed to know where he would wait."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "out",
              "paragraph": 1,
              "prompt": "Jo checked the tunnel. Sam stood where Leila could see his shoes, then moved aside to leave room to come ______. His useful job was to keep that space clear until the end and watch for her signal."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "end",
              "paragraph": 1,
              "prompt": "Jo checked the tunnel. Sam stood where Leila could see his shoes, then moved aside to leave room to come out. His useful job was to keep that space clear until the ______ and watch for her signal."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "signal",
              "paragraph": 1,
              "prompt": "Jo checked the tunnel. Sam stood where Leila could see his shoes, then moved aside to leave room to come out. His useful job was to keep that space clear until the end and watch for her ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "signal"
            },
            {
              "id": "w2",
              "word": "end"
            },
            {
              "id": "w1",
              "word": "out"
            },
            {
              "id": "w0",
              "word": "light"
            }
          ]
        }
      },
      {
        "text": [
          "A zigzag line of cones remained before the flag. Sam resisted running ahead while Leila brushed grass from her knees. He waited, then matched their shared pace.",
          "The course had barely changed. The important adjustments were in how they noticed, listened and responded. They laughed about the hoop’s changing height and approached the finish together. “We made it!” Sam said. He no longer needed to finish ahead of Leila or record a winning number."
        ],
        "mc": [
          {
            "prompt": "What shows Sam resisting his old habit?",
            "choices": [
              "He runs ahead to the flag.",
              "He moves all the cones.",
              "He asks Jo to choose a winner.",
              "He waits while Leila brushes off her knees."
            ],
            "answer": 3,
            "skill": "Find evidence of change",
            "evidence": "waited until she was ready"
          },
          {
            "prompt": "What has changed most during the course?",
            "choices": [
              "The shape of the finish flag",
              "The location of the tunnel",
              "How the children work with each other",
              "The number of stations"
            ],
            "answer": 2,
            "skill": "Identify a central idea",
            "evidence": "the way the two children noticed, listened, and responded"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The last cones",
              "led to the finish flag"
            ],
            [
              "Sam’s part",
              "was to match their shared pace"
            ],
            [
              "Most adjustments",
              "were in how they worked together"
            ]
          ],
          "options": [
            "were in how they worked together",
            "was to match their shared pace",
            "led to the finish flag"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The last cones led to the finish flag",
            "Sam’s part was to match their shared pace",
            "Most adjustments were in how they worked together"
          ]
        },
        "cloze": {
          "paragraphs": [
            "A zigzag line of cones remained before the {{c0}}. Sam resisted running ahead while Leila brushed grass from her knees. He waited, then matched their shared {{c1}}.",
            "The course had barely changed. The important adjustments were in how they noticed, listened and {{c2}}. They laughed about the hoop’s changing height and approached the finish together. “We made it!” Sam said. He no longer needed to finish ahead of Leila or record a winning {{c3}}."
          ],
          "parts": [
            "A zigzag line of cones remained before the {{c0}}. Sam resisted running ahead while Leila brushed grass from her knees. He waited, then matched their shared {{c1}}.\n\nThe course had barely changed. The important adjustments were in how they noticed, listened and {{c2}}. They laughed about the hoop’s changing height and approached the finish together. “We made it!” Sam said. He no longer needed to finish ahead of Leila or record a winning {{c3}}."
          ],
          "columns": [
            "A zigzag line of cones remained before the {{c0}}. Sam resisted running ahead while Leila brushed grass from her knees. He waited, then matched their shared {{c1}}. The course had barely changed. The important adjustments were in how they noticed, listened and {{c2}}. They laughed about the hoop’s changing height and approached the finish together. “We made it!” Sam said. He no longer needed to finish ahead of Leila or record a winning {{c3}}.",
            ""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "flag",
              "paragraph": 0,
              "prompt": "A zigzag line of cones remained before the ______. Sam resisted running ahead while Leila brushed grass from her knees. He waited, then matched their shared pace."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "pace",
              "paragraph": 0,
              "prompt": "A zigzag line of cones remained before the flag. Sam resisted running ahead while Leila brushed grass from her knees. He waited, then matched their shared ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "responded",
              "paragraph": 1,
              "prompt": "The course had barely changed. The important adjustments were in how they noticed, listened and ______. They laughed about the hoop’s changing height and approached the finish together. “We made it!” Sam said. He no longer needed to finish ahead of Leila or record a winning number."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "number",
              "paragraph": 1,
              "prompt": "The course had barely changed. The important adjustments were in how they noticed, listened and responded. They laughed about the hoop’s changing height and approached the finish together. “We made it!” Sam said. He no longer needed to finish ahead of Leila or record a winning ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "number"
            },
            {
              "id": "w2",
              "word": "responded"
            },
            {
              "id": "w1",
              "word": "pace"
            },
            {
              "id": "w0",
              "word": "flag"
            }
          ]
        }
      },
      {
        "text": [
          "At the finish, Leila remembered the tunnel, but named the hoop as her hardest obstacle. “I kept wanting to make it a race,” Sam admitted.",
          "Jo left the time box empty and recorded smaller steps, a lower hoop and time to listen. Sam valued this shared progress without a winning time. On his map, two figures stood beside the yellow flag, with room to finish together."
        ],
        "mc": [
          {
            "prompt": "Why does the empty time box matter?",
            "choices": [
              "It emphasises progress that cannot be described by speed alone.",
              "It shows that Jo forgot the whole activity.",
              "It proves that the children did not finish.",
              "It means the course will be cancelled."
            ],
            "answer": 0,
            "skill": "Interpret a significant detail",
            "evidence": "he did not need a number there"
          },
          {
            "prompt": "How has Sam changed by the end?",
            "choices": [
              "He believes he should do the course alone.",
              "He thinks Leila should always follow him.",
              "He decides that practice cannot help.",
              "He values listening and shared progress as well as finishing."
            ],
            "answer": 3,
            "skill": "Trace character development",
            "evidence": "time to listen"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The clipboard notes",
              "recorded changes the children made"
            ],
            [
              "The empty time box",
              "left speed unranked"
            ],
            [
              "The two figures",
              "represented a shared finish"
            ]
          ],
          "options": [
            "represented a shared finish",
            "left speed unranked",
            "recorded changes the children made"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The clipboard notes recorded changes the children made",
            "The empty time box left speed unranked",
            "The two figures represented a shared finish"
          ]
        },
        "cloze": {
          "paragraphs": [
            "At the finish, Leila remembered the {{c0}}, but named the hoop as her hardest obstacle. “I kept wanting to make it a {{c1}},” Sam admitted.",
            "Jo left the time box empty and recorded smaller steps, a lower hoop and time to listen. Sam valued this shared progress without a winning time. On his map, two figures stood beside the yellow {{c2}}, with room to finish {{c3}}."
          ],
          "parts": [
            "At the finish, Leila remembered the {{c0}}, but named the hoop as her hardest obstacle. “I kept wanting to make it a {{c1}},” Sam admitted.\n\nJo left the time box empty and recorded smaller steps, a lower hoop and time to listen. Sam valued this shared progress without a winning time. On his map, two figures stood beside the yellow {{c2}}, with room to finish {{c3}}."
          ],
          "columns": [
            "At the finish, Leila remembered the {{c0}}, but named the hoop as her hardest obstacle. “I kept wanting to make it a {{c1}},” Sam admitted. Jo left the time box empty and recorded smaller steps, a lower hoop and time to listen. Sam valued this shared progress without a winning time. On his map, two figures stood beside the yellow {{c2}}, with room to finish {{c3}}.",
            ""
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "tunnel",
              "paragraph": 0,
              "prompt": "At the finish, Leila remembered the ______, but named the hoop as her hardest obstacle. “I kept wanting to make it a race,” Sam admitted."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "race",
              "paragraph": 0,
              "prompt": "At the finish, Leila remembered the tunnel, but named the hoop as her hardest obstacle. “I kept wanting to make it a ______,” Sam admitted."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "flag",
              "paragraph": 1,
              "prompt": "Jo left the time box empty and recorded smaller steps, a lower hoop and time to listen. Sam valued this shared progress without a winning time. On his map, two figures stood beside the yellow ______, with room to finish together."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "together",
              "paragraph": 1,
              "prompt": "Jo left the time box empty and recorded smaller steps, a lower hoop and time to listen. Sam valued this shared progress without a winning time. On his map, two figures stood beside the yellow flag, with room to finish ______."
            }
          ],
          "bank": [
            {
              "id": "w3",
              "word": "together"
            },
            {
              "id": "w2",
              "word": "flag"
            },
            {
              "id": "w1",
              "word": "race"
            },
            {
              "id": "w0",
              "word": "tunnel"
            }
          ]
        }
      }
    ],
    "intro": "710 words · 10 reading pages · 4 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  },
  "R": {
    "grade": "F&P R target",
    "titles": [
      "A sunny start",
      "A different kind of balance",
      "Holding is not always helping",
      "The missing number"
    ],
    "sections": [
      {
        "text": [
          "On a sunny Saturday, Sam and Leila walked to Adventure Park with Jo to try its new obstacle course. Sam read the course card, picturing a fast trip over the stones, low rope, beam and log, through the hoop and then a quick crawl through the tunnel. He wanted to reach the yellow flag first.",
          "Leila read the same card as a list of questions. Was the log secure? Who would hold the hoop first? Where should a partner wait without blocking the next person?",
          "Jo explained that the challenge was cooperative. There was no timing device, no ranking, and no award for reaching the yellow flag alone. Sam repeated the instructions correctly, then moved towards the start before Leila had finished checking the route.",
          "Nobody accused him of ignoring the rules. From his point of view, he had already accepted them. What he had not noticed was the difference between knowing what cooperation meant as a word and allowing it to change his own behaviour. Leila picked up the hoop and followed, carrying both a piece of equipment and a question about how this partnership would work. The red cones led them onward."
        ],
        "mc": [
          {
            "prompt": "Why does the author show both children reading the same card?",
            "choices": [
              "To suggest that the card contains two different routes",
              "To show that Leila cannot understand the instructions",
              "To establish that Sam has already completed the course",
              "To reveal how their priorities shape what they notice"
            ],
            "answer": 3,
            "skill": "Analyse different perspectives",
            "evidence": "a list of questions"
          },
          {
            "prompt": "What distinction is introduced through Sam’s behaviour?",
            "choices": [
              "A shared activity needs no planning.",
              "Reading instructions prevents every difficulty.",
              "Understanding a rule is different from acting on it.",
              "Cooperation means always moving faster."
            ],
            "answer": 2,
            "skill": "Explain an implied idea",
            "evidence": "allowing it to change his own behaviour"
          }
        ],
        "artPage": 0,
        "match": {
          "rows": [
            [
              "Sam’s calculations",
              "focused on gaining seconds"
            ],
            [
              "Leila’s questions",
              "considered practical details"
            ],
            [
              "Jo’s challenge",
              "required cooperation"
            ]
          ],
          "options": [
            "required cooperation",
            "considered practical details",
            "focused on gaining seconds"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Sam’s calculations focused on gaining seconds",
            "Leila’s questions considered practical details",
            "Jo’s challenge required cooperation"
          ]
        },
        "cloze": {
          "paragraphs": [
            "On a sunny Saturday, Sam and Leila walked to Adventure Park with Jo to try its new obstacle course. Sam read the course card, picturing a fast trip over the stones, low rope, beam and log, through the hoop and then a quick {{c0}} through the tunnel. He wanted to reach the yellow flag first.",
            "Leila read the same card as a list of questions. Was the log secure? Who would hold the hoop first? Where should a partner wait without blocking the next person?",
            "Jo explained that the challenge was cooperative. There was no timing device, no ranking, and no award for reaching the yellow flag alone. Sam repeated the instructions correctly, then moved towards the start before Leila had finished checking the {{c1}}.",
            "Nobody accused him of ignoring the rules. From his point of view, he had already accepted them. What he had not noticed was the difference between knowing what cooperation meant as a word and allowing it to change his own {{c2}}. Leila picked up the hoop and followed, carrying both a piece of equipment and a question about how this partnership would {{c3}}. The red {{c4}} led them onward."
          ],
          "parts": [
            "On a sunny Saturday, Sam and Leila walked to Adventure Park with Jo to try its new obstacle course. Sam read the course card, picturing a fast trip over the stones, low rope, beam and log, through the hoop and then a quick {{c0}} through the tunnel. He wanted to reach the yellow flag first.\n\nLeila read the same card as a list of questions. Was the log secure? Who would hold the hoop first? Where should a partner wait without blocking the next person?\n\nJo explained that the challenge was cooperative. There was no timing device, no ranking, and no award for reaching the yellow flag alone. Sam repeated the instructions correctly, then moved towards the start before Leila had finished checking the {{c1}}.\n\nNobody accused him of ignoring the rules. From his point of view, he had already accepted them. What he had not noticed was the difference between knowing what cooperation meant as a word and allowing it to change his own {{c2}}. Leila picked up the hoop and followed, carrying both a piece of equipment and a question about how this partnership would {{c3}}. The red {{c4}} led them onward."
          ],
          "columns": [
            "On a sunny Saturday, Sam and Leila walked to Adventure Park with Jo to try its new obstacle course. Sam read the course card, picturing a fast trip over the stones, low rope, beam and log, through the hoop and then a quick {{c0}} through the tunnel. He wanted to reach the yellow flag first. Leila read the same card as a list of questions. Was the log secure? Who would hold the hoop first? Where should a partner wait without blocking the next person?",
            "Jo explained that the challenge was cooperative. There was no timing device, no ranking, and no award for reaching the yellow flag alone. Sam repeated the instructions correctly, then moved towards the start before Leila had finished checking the {{c1}}. Nobody accused him of ignoring the rules. From his point of view, he had already accepted them. What he had not noticed was the difference between knowing what cooperation meant as a word and allowing it to change his own {{c2}}. Leila picked up the hoop and followed, carrying both a piece of equipment and a question about how this partnership would {{c3}}. The red {{c4}} led them onward."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "crawl",
              "paragraph": 0,
              "prompt": "On a sunny Saturday, Sam and Leila walked to Adventure Park with Jo to try its new obstacle course. Sam read the course card, picturing a fast trip over the stones, low rope, beam and log, through the hoop and then a quick ______ through the tunnel. He wanted to reach the yellow flag first."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "route",
              "paragraph": 2,
              "prompt": "Jo explained that the challenge was cooperative. There was no timing device, no ranking, and no award for reaching the yellow flag alone. Sam repeated the instructions correctly, then moved towards the start before Leila had finished checking the ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "behaviour",
              "paragraph": 3,
              "prompt": "Nobody accused him of ignoring the rules. From his point of view, he had already accepted them. What he had not noticed was the difference between knowing what cooperation meant as a word and allowing it to change his own ______. Leila picked up the hoop and followed, carrying both a piece of equipment and a question about how this partnership would work. The red cones led them onward."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "work",
              "paragraph": 3,
              "prompt": "Nobody accused him of ignoring the rules. From his point of view, he had already accepted them. What he had not noticed was the difference between knowing what cooperation meant as a word and allowing it to change his own behaviour. Leila picked up the hoop and followed, carrying both a piece of equipment and a question about how this partnership would ______. The red cones led them onward."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "cones",
              "paragraph": 3,
              "prompt": "Nobody accused him of ignoring the rules. From his point of view, he had already accepted them. What he had not noticed was the difference between knowing what cooperation meant as a word and allowing it to change his own behaviour. Leila picked up the hoop and followed, carrying both a piece of equipment and a question about how this partnership would work. The red ______ led them onward."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "cones"
            },
            {
              "id": "w3",
              "word": "work"
            },
            {
              "id": "w2",
              "word": "behaviour"
            },
            {
              "id": "w1",
              "word": "route"
            },
            {
              "id": "w0",
              "word": "crawl"
            }
          ]
        }
      },
      {
        "text": [
          "They crossed the stepping stones first, leaving room for each other.",
          "On the low log, Sam looked towards the finish rather than at the wood under his feet. His foot slid sideways, and he stepped off onto the grass. Nothing hurt except his sense that this part ought to have been easy.",
          "Leila suggested shorter steps and a closer focus. Sam prepared a reply about knowing how to walk, then noticed a raised patch on the log that he had failed to see. He let the reply go.",
          "With Jo nearby, he spread his arms and crossed again, slowly enough to respond to each change in the surface. Leila waited for his nod before she began.",
          "Remaining beside the log gave Sam an unexpected view. From there, he could see how much concentration her crossing required. He had been measuring the activity by his own wish to finish, while she was experiencing it one careful step at a time. Waiting had not left him doing nothing; it had allowed him to notice work that his hurry had made invisible."
        ],
        "mc": [
          {
            "prompt": "Why does the author include the reply Sam decides not to make?",
            "choices": [
              "It explains why Sam must leave the park.",
              "It shows that Sam cannot hear Leila.",
              "It reveals defensiveness followed by a willingness to reconsider.",
              "It proves that Leila’s advice was incorrect."
            ],
            "answer": 2,
            "skill": "Interpret an internal response",
            "evidence": "He let the reply go"
          },
          {
            "prompt": "What does waiting allow Sam to recognise?",
            "choices": [
              "The exact time needed to win the activity",
              "Effort that he had overlooked while focusing on his own speed",
              "A shorter route that avoids the log",
              "A hidden stopwatch beside the tunnel"
            ],
            "answer": 1,
            "skill": "Connect viewpoint and understanding",
            "evidence": "work that his hurry had made invisible"
          }
        ],
        "artPage": 1,
        "match": {
          "rows": [
            [
              "The uneven surface",
              "required attention"
            ],
            [
              "Shorter steps",
              "helped Sam cross"
            ],
            [
              "Waiting beside the log",
              "challenged Sam’s priorities"
            ]
          ],
          "options": [
            "challenged Sam’s priorities",
            "helped Sam cross",
            "required attention"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The uneven surface required attention",
            "Shorter steps helped Sam cross",
            "Waiting beside the log challenged Sam’s priorities"
          ]
        },
        "cloze": {
          "paragraphs": [
            "They crossed the stepping stones first, leaving room for each other.",
            "On the low {{c0}}, Sam looked towards the finish rather than at the wood under his feet. His foot slid sideways, and he stepped off onto the grass. Nothing hurt except his sense that this part ought to have been {{c1}}.",
            "Leila suggested shorter steps and a closer focus. Sam prepared a reply about knowing how to walk, then noticed a raised patch on the log that he had failed to see. He let the reply go.",
            "With Jo nearby, he spread his arms and crossed again, slowly enough to respond to each change in the {{c2}}. Leila waited for his nod before she began.",
            "Remaining beside the log gave Sam an unexpected view. From there, he could see how much concentration her crossing required. He had been measuring the activity by his own wish to finish, while she was experiencing it one careful step at a {{c3}}. Waiting had not left him doing nothing; it had allowed him to notice work that his hurry had made {{c4}}."
          ],
          "parts": [
            "They crossed the stepping stones first, leaving room for each other.\n\nOn the low {{c0}}, Sam looked towards the finish rather than at the wood under his feet. His foot slid sideways, and he stepped off onto the grass. Nothing hurt except his sense that this part ought to have been {{c1}}.\n\nLeila suggested shorter steps and a closer focus. Sam prepared a reply about knowing how to walk, then noticed a raised patch on the log that he had failed to see. He let the reply go.\n\nWith Jo nearby, he spread his arms and crossed again, slowly enough to respond to each change in the {{c2}}. Leila waited for his nod before she began.\n\nRemaining beside the log gave Sam an unexpected view. From there, he could see how much concentration her crossing required. He had been measuring the activity by his own wish to finish, while she was experiencing it one careful step at a {{c3}}. Waiting had not left him doing nothing; it had allowed him to notice work that his hurry had made {{c4}}."
          ],
          "columns": [
            "They crossed the stepping stones first, leaving room for each other. On the low {{c0}}, Sam looked towards the finish rather than at the wood under his feet. His foot slid sideways, and he stepped off onto the grass. Nothing hurt except his sense that this part ought to have been {{c1}}.",
            "Leila suggested shorter steps and a closer focus. Sam prepared a reply about knowing how to walk, then noticed a raised patch on the log that he had failed to see. He let the reply go. With Jo nearby, he spread his arms and crossed again, slowly enough to respond to each change in the {{c2}}. Leila waited for his nod before she began. Remaining beside the log gave Sam an unexpected view. From there, he could see how much concentration her crossing required. He had been measuring the activity by his own wish to finish, while she was experiencing it one careful step at a {{c3}}. Waiting had not left him doing nothing; it had allowed him to notice work that his hurry had made {{c4}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "log",
              "paragraph": 1,
              "prompt": "On the low ______, Sam looked towards the finish rather than at the wood under his feet. His foot slid sideways, and he stepped off onto the grass. Nothing hurt except his sense that this part ought to have been easy."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "easy",
              "paragraph": 1,
              "prompt": "On the low log, Sam looked towards the finish rather than at the wood under his feet. His foot slid sideways, and he stepped off onto the grass. Nothing hurt except his sense that this part ought to have been ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "surface",
              "paragraph": 3,
              "prompt": "With Jo nearby, he spread his arms and crossed again, slowly enough to respond to each change in the ______. Leila waited for his nod before she began."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "time",
              "paragraph": 4,
              "prompt": "Remaining beside the log gave Sam an unexpected view. From there, he could see how much concentration her crossing required. He had been measuring the activity by his own wish to finish, while she was experiencing it one careful step at a ______. Waiting had not left him doing nothing; it had allowed him to notice work that his hurry had made invisible."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "invisible",
              "paragraph": 4,
              "prompt": "Remaining beside the log gave Sam an unexpected view. From there, he could see how much concentration her crossing required. He had been measuring the activity by his own wish to finish, while she was experiencing it one careful step at a time. Waiting had not left him doing nothing; it had allowed him to notice work that his hurry had made ______."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "invisible"
            },
            {
              "id": "w3",
              "word": "time"
            },
            {
              "id": "w2",
              "word": "surface"
            },
            {
              "id": "w1",
              "word": "easy"
            },
            {
              "id": "w0",
              "word": "log"
            }
          ]
        }
      },
      {
        "text": [
          "Next came the low beam and rope. Jo stayed beside the beam as they balanced, then watched them step over the rope.",
          "Sam stepped easily through the hoop Leila held. When he returned to hold it for her, he copied its position precisely, as if sameness would guarantee that he was being a fair partner.",
          "Leila’s foot caught the rim. She stepped back and asked for the hoop to be lowered. Sam felt the first flicker of annoyance: he had copied what she had done, so why was she asking for something different?",
          "The answer was visible when he stopped defending the arrangement. Leila was shorter. What had been a comfortable step for Sam was an obstacle of a different size for her.",
          "He lowered the hoop, steadied it with both hands, and waited for her to pass. No new equipment was needed. The change was in whose experience guided its use. Sam began to understand that help could look correct from the giver’s position while still failing the person receiving it. Leila’s request had not rejected his effort; it had shown him how to make that effort useful."
        ],
        "mc": [
          {
            "prompt": "What challenges Sam’s first idea of fairness?",
            "choices": [
              "Sam discovers that taking turns is forbidden.",
              "An identical arrangement affects the two children differently.",
              "The hoop changes size when Leila touches it.",
              "Jo gives one child a shorter route."
            ],
            "answer": 1,
            "skill": "Evaluate an assumption",
            "evidence": "Leila was shorter"
          },
          {
            "prompt": "Why does the author resolve the problem through a small physical adjustment?",
            "choices": [
              "It makes the effect of listening clear in a concrete action.",
              "It suggests that every disagreement needs new equipment.",
              "It shows that words are never useful.",
              "It proves that Leila should complete the course alone."
            ],
            "answer": 0,
            "skill": "Analyse how a theme is developed",
            "evidence": "make that effort useful"
          }
        ],
        "artPage": 2,
        "match": {
          "rows": [
            [
              "Leila’s request",
              "identified the change she needed"
            ],
            [
              "Sam’s first reaction",
              "was impatience"
            ],
            [
              "The lower hoop",
              "allowed Leila to step through"
            ]
          ],
          "options": [
            "allowed Leila to step through",
            "was impatience",
            "identified the change she needed"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "Leila’s request identified the change she needed",
            "Sam’s first reaction was impatience",
            "The lower hoop allowed Leila to step through"
          ]
        },
        "cloze": {
          "paragraphs": [
            "Next came the low beam and rope. Jo stayed beside the beam as they balanced, then watched them step over the rope.",
            "Sam stepped easily through the {{c0}} Leila held. When he returned to hold it for her, he copied its position precisely, as if sameness would guarantee that he was being a fair {{c1}}.",
            "Leila’s foot caught the rim. She stepped back and asked for the hoop to be lowered. Sam felt the first flicker of annoyance: he had copied what she had done, so why was she asking for something different?",
            "The answer was visible when he stopped defending the arrangement. Leila was shorter. What had been a comfortable step for Sam was an obstacle of a different {{c2}} for her.",
            "He lowered the hoop, steadied it with both hands, and waited for her to pass. No new equipment was needed. The change was in whose experience guided its use. Sam began to understand that help could look correct from the giver’s position while still failing the person receiving {{c3}}. Leila’s request had not rejected his effort; it had shown him how to make that effort {{c4}}."
          ],
          "parts": [
            "Next came the low beam and rope. Jo stayed beside the beam as they balanced, then watched them step over the rope.\n\nSam stepped easily through the {{c0}} Leila held. When he returned to hold it for her, he copied its position precisely, as if sameness would guarantee that he was being a fair {{c1}}.\n\nLeila’s foot caught the rim. She stepped back and asked for the hoop to be lowered. Sam felt the first flicker of annoyance: he had copied what she had done, so why was she asking for something different?\n\nThe answer was visible when he stopped defending the arrangement. Leila was shorter. What had been a comfortable step for Sam was an obstacle of a different {{c2}} for her.\n\nHe lowered the hoop, steadied it with both hands, and waited for her to pass. No new equipment was needed. The change was in whose experience guided its use. Sam began to understand that help could look correct from the giver’s position while still failing the person receiving {{c3}}. Leila’s request had not rejected his effort; it had shown him how to make that effort {{c4}}."
          ],
          "columns": [
            "Next came the low beam and rope. Jo stayed beside the beam as they balanced, then watched them step over the rope. Sam stepped easily through the {{c0}} Leila held. When he returned to hold it for her, he copied its position precisely, as if sameness would guarantee that he was being a fair {{c1}}.",
            "Leila’s foot caught the rim. She stepped back and asked for the hoop to be lowered. Sam felt the first flicker of annoyance: he had copied what she had done, so why was she asking for something different? The answer was visible when he stopped defending the arrangement. Leila was shorter. What had been a comfortable step for Sam was an obstacle of a different {{c2}} for her. He lowered the hoop, steadied it with both hands, and waited for her to pass. No new equipment was needed. The change was in whose experience guided its use. Sam began to understand that help could look correct from the giver’s position while still failing the person receiving {{c3}}. Leila’s request had not rejected his effort; it had shown him how to make that effort {{c4}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "hoop",
              "paragraph": 1,
              "prompt": "Sam stepped easily through the ______ Leila held. When he returned to hold it for her, he copied its position precisely, as if sameness would guarantee that he was being a fair partner."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "partner",
              "paragraph": 1,
              "prompt": "Sam stepped easily through the hoop Leila held. When he returned to hold it for her, he copied its position precisely, as if sameness would guarantee that he was being a fair ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "size",
              "paragraph": 3,
              "prompt": "The answer was visible when he stopped defending the arrangement. Leila was shorter. What had been a comfortable step for Sam was an obstacle of a different ______ for her."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "it",
              "paragraph": 4,
              "prompt": "He lowered the hoop, steadied it with both hands, and waited for her to pass. No new equipment was needed. The change was in whose experience guided its use. Sam began to understand that help could look correct from the giver’s position while still failing the person receiving ______. Leila’s request had not rejected his effort; it had shown him how to make that effort useful."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "useful",
              "paragraph": 4,
              "prompt": "He lowered the hoop, steadied it with both hands, and waited for her to pass. No new equipment was needed. The change was in whose experience guided its use. Sam began to understand that help could look correct from the giver’s position while still failing the person receiving it. Leila’s request had not rejected his effort; it had shown him how to make that effort ______."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "useful"
            },
            {
              "id": "w3",
              "word": "it"
            },
            {
              "id": "w2",
              "word": "size"
            },
            {
              "id": "w1",
              "word": "partner"
            },
            {
              "id": "w0",
              "word": "hoop"
            }
          ]
        }
      },
      {
        "text": [
          "On the last stretch, they weaved through the zigzag cones side by side.",
          "At the tunnel’s exit, Sam waited until Leila could see him before asking whether she was ready. They followed the final cones and reached the yellow flag together.",
          "Jo asked about difficulty rather than time. Leila described the hoop. Sam considered the log, then chose a less visible obstacle: his habit of turning every shared task into a private race.",
          "On the clipboard, the time box remained empty. Jo recorded the changes that had helped them: shorter steps, an adjusted hoop, and enough time to listen. The record described learning rather than simply announcing a result.",
          "Sam still liked being quick. He did not suddenly become a person who never wanted to compete. However, when he drew two figures beside the flag on his map, he understood why neither needed to stand ahead of the other. The activity had asked for a different measure of success, and, by the end, he could help choose that measure. The blank time box had made space for a fuller story."
        ],
        "mc": [
          {
            "prompt": "What is the effect of saying that Sam still likes being quick?",
            "choices": [
              "His change seems specific and believable rather than complete.",
              "It cancels every lesson he has learned.",
              "It proves that Jo should have timed the course.",
              "It means Leila has failed the challenge."
            ],
            "answer": 0,
            "skill": "Interpret a nuanced character change",
            "evidence": "He did not suddenly become"
          },
          {
            "prompt": "How does Jo’s record support the story’s theme?",
            "choices": [
              "It identifies the fastest child through hidden numbers.",
              "It lists only the equipment that was broken.",
              "It shows that reaching the flag was unnecessary.",
              "It values the adjustments and listening that enabled shared progress."
            ],
            "answer": 3,
            "skill": "Analyse a significant detail",
            "evidence": "The record described learning"
          }
        ],
        "artPage": 3,
        "match": {
          "rows": [
            [
              "The clipboard notes",
              "recorded changes the children made"
            ],
            [
              "The empty time box",
              "left speed unranked"
            ],
            [
              "The two figures",
              "represented a shared finish"
            ]
          ],
          "options": [
            "represented a shared finish",
            "left speed unranked",
            "recorded changes the children made"
          ],
          "skill": "Connect evidence and ideas",
          "evidence": [
            "The clipboard notes recorded changes the children made",
            "The empty time box left speed unranked",
            "The two figures represented a shared finish"
          ]
        },
        "cloze": {
          "paragraphs": [
            "On the last stretch, they weaved through the zigzag cones side by side.",
            "At the tunnel’s exit, Sam waited until Leila could see him before asking whether she was ready. They followed the final cones and reached the yellow flag {{c0}}.",
            "Jo asked about difficulty rather than time. Leila described the hoop. Sam considered the log, then chose a less visible obstacle: his habit of turning every shared task into a private {{c1}}.",
            "On the clipboard, the time box remained empty. Jo recorded the changes that had helped them: shorter steps, an adjusted hoop, and enough time to listen. The record described learning rather than simply announcing a {{c2}}.",
            "Sam still liked being quick. He did not suddenly become a person who never wanted to compete. However, when he drew two figures beside the flag on his map, he understood why neither needed to stand ahead of the other. The activity had asked for a different measure of success, and, by the end, he could help choose that {{c3}}. The blank time box had made space for a fuller {{c4}}."
          ],
          "parts": [
            "On the last stretch, they weaved through the zigzag cones side by side.\n\nAt the tunnel’s exit, Sam waited until Leila could see him before asking whether she was ready. They followed the final cones and reached the yellow flag {{c0}}.\n\nJo asked about difficulty rather than time. Leila described the hoop. Sam considered the log, then chose a less visible obstacle: his habit of turning every shared task into a private {{c1}}.\n\nOn the clipboard, the time box remained empty. Jo recorded the changes that had helped them: shorter steps, an adjusted hoop, and enough time to listen. The record described learning rather than simply announcing a {{c2}}.\n\nSam still liked being quick. He did not suddenly become a person who never wanted to compete. However, when he drew two figures beside the flag on his map, he understood why neither needed to stand ahead of the other. The activity had asked for a different measure of success, and, by the end, he could help choose that {{c3}}. The blank time box had made space for a fuller {{c4}}."
          ],
          "columns": [
            "On the last stretch, they weaved through the zigzag cones side by side. At the tunnel’s exit, Sam waited until Leila could see him before asking whether she was ready. They followed the final cones and reached the yellow flag {{c0}}.",
            "Jo asked about difficulty rather than time. Leila described the hoop. Sam considered the log, then chose a less visible obstacle: his habit of turning every shared task into a private {{c1}}. On the clipboard, the time box remained empty. Jo recorded the changes that had helped them: shorter steps, an adjusted hoop, and enough time to listen. The record described learning rather than simply announcing a {{c2}}. Sam still liked being quick. He did not suddenly become a person who never wanted to compete. However, when he drew two figures beside the flag on his map, he understood why neither needed to stand ahead of the other. The activity had asked for a different measure of success, and, by the end, he could help choose that {{c3}}. The blank time box had made space for a fuller {{c4}}."
          ],
          "blanks": [
            {
              "id": "c0",
              "token": "w0",
              "word": "together",
              "paragraph": 1,
              "prompt": "At the tunnel’s exit, Sam waited until Leila could see him before asking whether she was ready. They followed the final cones and reached the yellow flag ______."
            },
            {
              "id": "c1",
              "token": "w1",
              "word": "race",
              "paragraph": 2,
              "prompt": "Jo asked about difficulty rather than time. Leila described the hoop. Sam considered the log, then chose a less visible obstacle: his habit of turning every shared task into a private ______."
            },
            {
              "id": "c2",
              "token": "w2",
              "word": "result",
              "paragraph": 3,
              "prompt": "On the clipboard, the time box remained empty. Jo recorded the changes that had helped them: shorter steps, an adjusted hoop, and enough time to listen. The record described learning rather than simply announcing a ______."
            },
            {
              "id": "c3",
              "token": "w3",
              "word": "measure",
              "paragraph": 4,
              "prompt": "Sam still liked being quick. He did not suddenly become a person who never wanted to compete. However, when he drew two figures beside the flag on his map, he understood why neither needed to stand ahead of the other. The activity had asked for a different measure of success, and, by the end, he could help choose that ______. The blank time box had made space for a fuller story."
            },
            {
              "id": "c4",
              "token": "w4",
              "word": "story",
              "paragraph": 4,
              "prompt": "Sam still liked being quick. He did not suddenly become a person who never wanted to compete. However, when he drew two figures beside the flag on his map, he understood why neither needed to stand ahead of the other. The activity had asked for a different measure of success, and, by the end, he could help choose that measure. The blank time box had made space for a fuller ______."
            }
          ],
          "bank": [
            {
              "id": "w4",
              "word": "story"
            },
            {
              "id": "w3",
              "word": "measure"
            },
            {
              "id": "w2",
              "word": "result"
            },
            {
              "id": "w1",
              "word": "race"
            },
            {
              "id": "w0",
              "word": "together"
            }
          ]
        }
      }
    ],
    "intro": "742 words · 4 reading pages · 5 blanks per page · questions, matching and a picture notebook",
    "defaultRate": 0.85
  }
};
const TITLES=["A day at the park","On the log","A big hoop","At the flag"];
const SCENE_ALTS=["Obstacle Course cover","Obstacle Course: A day at the park","Obstacle Course: On the log","Obstacle Course: A big hoop","Obstacle Course: At the flag"];
window.CAMP_ART=["assets/illustrations/page-1-pixar.png","assets/illustrations/page-1-pixar.png","assets/illustrations/page-2-pixar.png","assets/illustrations/page-3-pixar.png","assets/illustrations/page-4-pixar.png"];
window.CAMP_REPORT_ART_VERSION="641702b64e2c";
window.LOWER_PICTURE_SETS={"groups":[["cone","hoop","log","map"],["foot","arms","grass","beam"],["big hoop","tunnel","head","hand"],["flag","smile","pals","path"]],"atlas":"assets/illustrations/chapter-picture-groups-v1.png"};
window.EXTRA_TASKS={"E":[{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A blue cone.","A yellow cone.","A red cone."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["A blue hoop.","A yellow hoop.","A red hoop."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["A brown log with bark.","A brown log with no bark.","A log covered in snow."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["A map rolled up.","A map folded shut.","A map spread out."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":3}}]},"why":{"label":"Who, what, where & why","prefix":"y","items":[{"prompt":"Who are the two children in this story?","choices":["Sam and Jo","Leila and Jo","Sam and Leila"],"answer":2,"skill":"Find who, what, where and why"},{"prompt":"What does Jo put on the table?","choices":["A log.","A map.","A hoop."],"answer":1,"skill":"Find who, what, where and why"},{"prompt":"Where are the children?","choices":["At the park.","At the lake.","At Jo’s shed."],"answer":0,"skill":"Find who, what, where and why"},{"prompt":"Why does Sam walk to the log?","choices":["He wants to put it on the table.","He wants to paint it.","He wants to walk on it."],"answer":2,"skill":"Find who, what, where and why"}]},"glossary":{"label":"Listening glossary","prefix":"a","requiredListens":3,"items":[{"word":"log","prompt":"Listen to the glossary word \"log\" three times. Press its picture once for each full listen.","choices":["log"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/log.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":0}},{"word":"hoop","prompt":"Listen to the glossary word \"hoop\" three times. Press its picture once for each full listen.","choices":["hoop"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/hoop.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":1}},{"word":"map","prompt":"Listen to the glossary word \"map\" three times. Press its picture once for each full listen.","choices":["map"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/map.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":2}},{"word":"cone","prompt":"Listen to the glossary word \"cone\" three times. Press its picture once for each full listen.","choices":["cone"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/cone.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":3}},{"word":"rope","prompt":"Listen to the glossary word \"rope\" three times. Press its picture once for each full listen.","choices":["rope"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/rope.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":4}},{"word":"beam","prompt":"Listen to the glossary word \"beam\" three times. Press its picture once for each full listen.","choices":["beam"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/beam.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":5}},{"word":"tunnel","prompt":"Listen to the glossary word \"tunnel\" three times. Press its picture once for each full listen.","choices":["tunnel"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/tunnel.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":6}},{"word":"flag","prompt":"Listen to the glossary word \"flag\" three times. Press its picture once for each full listen.","choices":["flag"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/flag.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":7}},{"word":"foot","prompt":"Listen to the glossary word \"foot\" three times. Press its picture once for each full listen.","choices":["foot"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/foot.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":8}},{"word":"grass","prompt":"Listen to the glossary word \"grass\" three times. Press its picture once for each full listen.","choices":["grass"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/grass.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":9}}]},"characters":{"label":"Meet the characters","prefix":"n","assessable":false,"items":[{"name":"Sam","audio":"assets/audio/characters/sam.wav","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":7}},{"name":"Leila","audio":"assets/audio/characters/leila.wav","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":8}},{"name":"Jo","audio":"assets/audio/characters/jo.wav","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":9}}]},"scenes":{"label":"Picture sentences","prefix":"u","items":[{"prompt":"Choose the sentence that describes picture 1.","choices":["It is a rainy day.","It is a snowy day.","It is a sunny day."],"answer":2,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":0}},{"prompt":"Choose the sentence that describes picture 2.","choices":["Sam and Leila go to the beach with Jo.","Sam and Leila go to the park with Jo.","Sam and Leila go to the lake with Jo."],"answer":1,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":1}},{"prompt":"Choose the sentence that describes picture 3.","choices":["Jo puts a map on the table.","Jo puts a bag on the table.","Jo puts a hoop on the table."],"answer":0,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":2}},{"prompt":"Choose the sentence that describes picture 4.","choices":["Sam sees a blue cone.","Sam sees a yellow cone.","Sam sees a red cone."],"answer":2,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":3}},{"prompt":"Choose the sentence that describes picture 5.","choices":["Leila holds a long rope.","Leila holds a big hoop.","Leila holds a small cone."],"answer":1,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":4}},{"prompt":"Choose the sentence that describes picture 6.","choices":["A log is on the grass.","A log is on the table.","A log is in the water."],"answer":0,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":5}},{"prompt":"Choose the sentence that describes picture 7.","choices":["Sam walks to the table.","Sam walks to the flag.","Sam walks to the log."],"answer":2,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":6}}]},"listenSentences":{"label":"Listen to sentences","prefix":"h","items":[{"word":"log","text":"A log is on the grass.","before":"A ","after":" is on the grass.","audio":"assets/audio/sentences/1.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":0},"prompt":"Listen to the complete sentence: A log is on the grass.","choices":["A log is on the grass."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"hoop","text":"Leila holds a big hoop.","before":"Leila holds a big ","after":".","audio":"assets/audio/sentences/2.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":1},"prompt":"Listen to the complete sentence: Leila holds a big hoop.","choices":["Leila holds a big hoop."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"map","text":"Jo puts a map on the table.","before":"Jo puts a ","after":" on the table.","audio":"assets/audio/sentences/3.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":2},"prompt":"Listen to the complete sentence: Jo puts a map on the table.","choices":["Jo puts a map on the table."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"cone","text":"Sam sees a red cone.","before":"Sam sees a red ","after":".","audio":"assets/audio/sentences/4.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":3},"prompt":"Listen to the complete sentence: Sam sees a red cone.","choices":["Sam sees a red cone."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"rope","text":"Sam steps over the rope.","before":"Sam steps over the ","after":".","audio":"assets/audio/sentences/5.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":4},"prompt":"Listen to the complete sentence: Sam steps over the rope.","choices":["Sam steps over the rope."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"beam","text":"Leila walks on the beam.","before":"Leila walks on the ","after":".","audio":"assets/audio/sentences/6.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":5},"prompt":"Listen to the complete sentence: Leila walks on the beam.","choices":["Leila walks on the beam."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"tunnel","text":"Sam crawls through the tunnel.","before":"Sam crawls through the ","after":".","audio":"assets/audio/sentences/7.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":6},"prompt":"Listen to the complete sentence: Sam crawls through the tunnel.","choices":["Sam crawls through the tunnel."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"flag","text":"The flag is at the end.","before":"The ","after":" is at the end.","audio":"assets/audio/sentences/8.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":7},"prompt":"Listen to the complete sentence: The flag is at the end.","choices":["The flag is at the end."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"foot","text":"Sam lifts his foot.","before":"Sam lifts his ","after":".","audio":"assets/audio/sentences/9.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":8},"prompt":"Listen to the complete sentence: Sam lifts his foot.","choices":["Sam lifts his foot."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"grass","text":"Green grass grows by the log.","before":"Green ","after":" grows by the log.","audio":"assets/audio/sentences/10.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":9},"prompt":"Listen to the complete sentence: Green grass grows by the log.","choices":["Green grass grows by the log."],"answer":0,"skill":"Listen to a complete story-related sentence"}]},"listenFill":{"label":"Listen and fill","prefix":"j","items":[{"word":"log","text":"A log is on the grass.","before":"A ","after":" is on the grass.","audio":"assets/audio/sentences/1.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":0},"prompt":"A ______ is on the grass.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":0,"skill":"Listen and choose the word that completes a sentence"},{"word":"hoop","text":"Leila holds a big hoop.","before":"Leila holds a big ","after":".","audio":"assets/audio/sentences/2.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":1},"prompt":"Leila holds a big ______.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":1,"skill":"Listen and choose the word that completes a sentence"},{"word":"map","text":"Jo puts a map on the table.","before":"Jo puts a ","after":" on the table.","audio":"assets/audio/sentences/3.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":2},"prompt":"Jo puts a ______ on the table.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":2,"skill":"Listen and choose the word that completes a sentence"},{"word":"cone","text":"Sam sees a red cone.","before":"Sam sees a red ","after":".","audio":"assets/audio/sentences/4.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":3},"prompt":"Sam sees a red ______.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":3,"skill":"Listen and choose the word that completes a sentence"},{"word":"rope","text":"Sam steps over the rope.","before":"Sam steps over the ","after":".","audio":"assets/audio/sentences/5.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":4},"prompt":"Sam steps over the ______.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":4,"skill":"Listen and choose the word that completes a sentence"},{"word":"beam","text":"Leila walks on the beam.","before":"Leila walks on the ","after":".","audio":"assets/audio/sentences/6.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":5},"prompt":"Leila walks on the ______.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":5,"skill":"Listen and choose the word that completes a sentence"},{"word":"tunnel","text":"Sam crawls through the tunnel.","before":"Sam crawls through the ","after":".","audio":"assets/audio/sentences/7.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":6},"prompt":"Sam crawls through the ______.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":6,"skill":"Listen and choose the word that completes a sentence"},{"word":"flag","text":"The flag is at the end.","before":"The ","after":" is at the end.","audio":"assets/audio/sentences/8.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":7},"prompt":"The ______ is at the end.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":7,"skill":"Listen and choose the word that completes a sentence"},{"word":"foot","text":"Sam lifts his foot.","before":"Sam lifts his ","after":".","audio":"assets/audio/sentences/9.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":8},"prompt":"Sam lifts his ______.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":8,"skill":"Listen and choose the word that completes a sentence"},{"word":"grass","text":"Green grass grows by the log.","before":"Green ","after":" grows by the log.","audio":"assets/audio/sentences/10.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":9},"prompt":"Green ______ grows by the log.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":9,"skill":"Listen and choose the word that completes a sentence"}]},"spelling":{"version":2,"label":"Spelling","prefix":"s","words":[{"word":"map","prefix":"s0","letters":[{"id":"letter1","text":"a"},{"id":"letter4","text":"z"},{"id":"letter2","text":"p"},{"id":"letter0","text":"m"},{"id":"letter3","text":"s"}],"audio":"assets/audio/spelling/map.wav","picture":{"atlas":"assets/illustrations/spelling-pictures-v1.png","columns":4,"rows":2,"index":0}},{"word":"log","prefix":"s1","letters":[{"id":"letter4","text":"a"},{"id":"letter2","text":"g"},{"id":"letter3","text":"t"},{"id":"letter1","text":"o"},{"id":"letter0","text":"l"}],"audio":"assets/audio/spelling/log.wav","picture":{"atlas":"assets/illustrations/spelling-pictures-v1.png","columns":4,"rows":2,"index":1}},{"word":"hoop","prefix":"s2","letters":[{"id":"letter1","text":"o"},{"id":"letter3","text":"p"},{"id":"letter5","text":"b"},{"id":"letter4","text":"u"},{"id":"letter2","text":"o"},{"id":"letter0","text":"h"}],"audio":"assets/audio/spelling/hoop.wav","picture":{"atlas":"assets/illustrations/spelling-pictures-v1.png","columns":4,"rows":2,"index":2}},{"word":"flag","prefix":"s3","letters":[{"id":"letter0","text":"f"},{"id":"letter1","text":"l"},{"id":"letter2","text":"a"},{"id":"letter3","text":"g"},{"id":"letter4","text":"w"},{"id":"letter5","text":"e"}],"audio":"assets/audio/spelling/flag.wav","picture":{"atlas":"assets/illustrations/spelling-pictures-v1.png","columns":4,"rows":2,"index":3}},{"word":"cone","prefix":"s4","letters":[{"id":"letter2","text":"n"},{"id":"letter3","text":"e"},{"id":"letter5","text":"g"},{"id":"letter0","text":"c"},{"id":"letter1","text":"o"},{"id":"letter4","text":"x"}],"audio":"assets/audio/spelling/cone.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":3}},{"word":"rope","prefix":"s5","letters":[{"id":"letter2","text":"p"},{"id":"letter4","text":"y"},{"id":"letter0","text":"r"},{"id":"letter1","text":"o"},{"id":"letter5","text":"g"},{"id":"letter3","text":"e"}],"audio":"assets/audio/spelling/rope.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":4}},{"word":"foot","prefix":"s6","letters":[{"id":"letter1","text":"o"},{"id":"letter4","text":"y"},{"id":"letter3","text":"t"},{"id":"letter5","text":"g"},{"id":"letter0","text":"f"},{"id":"letter2","text":"o"}],"audio":"assets/audio/spelling/foot.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":8}},{"word":"grass","prefix":"s7","letters":[{"id":"letter0","text":"g"},{"id":"letter4","text":"s"},{"id":"letter5","text":"b"},{"id":"letter6","text":"j"},{"id":"letter2","text":"a"},{"id":"letter1","text":"r"},{"id":"letter3","text":"s"}],"audio":"assets/audio/spelling/grass.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":9}}],"items":[{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["a","z","p","m","s"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["a","g","t","o","l"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["o","p","b","u","o","h"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["f","l","a","g","w","e"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["n","e","g","c","o","x"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["p","y","r","o","g","e"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["o","y","t","g","f","o"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["g","s","b","j","a","r","s"],"answer":0,"skill":"Spell a spoken word using movable letters"}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A foot in a red shoe.","A foot in a blue shoe.","A bare foot."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["A child with arms out to the sides.","A child with arms above the head.","A child with arms down by the sides."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["A brown clump of dry grass.","Grass covered in snow.","A green clump of grass."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["A low metal beam.","A low wooden beam.","A tall wooden beam."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":3}}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Sam put his arms out?","choices":["To carry the map.","To help him stay on the log.","To hold the hoop."],"answer":1,"skill":"Explain why an event or action happens"},{"prompt":"Why does Sam lift his foot?","choices":["To step over the rope.","To touch the flag.","To pick up the map."],"answer":0,"skill":"Explain why an event or action happens"}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A big yellow hoop.","A big red hoop.","A big blue hoop."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["A short red tunnel.","A long yellow tunnel.","A short teal tunnel."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["A child with short red hair.","A child with short black hair.","A child with long black hair."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["An open hand.","A hand in a fist.","A hand holding a rope."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":3}}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Sam bend his head down?","choices":["To fit through the hoop.","To look at the flag.","To stand on the beam."],"answer":0,"skill":"Explain why an event or action happens"},{"prompt":"Why does Sam hold the hoop for Leila?","choices":["So Leila can paint it.","So Leila can carry the log.","So Leila can step through it."],"answer":2,"skill":"Explain why an event or action happens"}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["A red flag on a pole.","A blue flag on a pole.","A yellow flag on a pole."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["A mouth with a sad frown.","An open mouth with a big smile.","A closed mouth with a small smile."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["Two pals standing together.","One pal sitting alone.","Two pals walking away."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["A straight path with grass beside it.","A winding path covered in snow.","A winding path with grass beside it."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":3}}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why do Sam and Leila walk to the flag?","choices":["It is where they left their map.","It is holding up the rope.","It marks the end of the course."],"answer":2,"skill":"Explain why an event or action happens"},{"prompt":"Why do they sort the cones by colour?","choices":["To make the beam taller.","To put the same colours together.","To put the cones in the tunnel."],"answer":1,"skill":"Explain why an event or action happens"}]}}],"F":[{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a yellow cone.","I can see a red cone.","I can see a blue cone."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see a yellow hoop.","I can see a red hoop.","I can see a blue hoop."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see a brown log with no bark.","I can see a log covered in snow.","I can see a brown log with bark."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see a map folded shut.","I can see a map spread out.","I can see a map rolled up."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":3}}]},"why":{"label":"Who, what, where & why","prefix":"y","items":[{"prompt":"Who are the two children in this story?","choices":["Sam and Jo","Leila and Jo","Sam and Leila"],"answer":2,"skill":"Find who, what, where and why"},{"prompt":"What shows the way around the course?","choices":["Tall trees.","Red cones.","Blue bags."],"answer":1,"skill":"Find who, what, where and why"},{"prompt":"Where are the children?","choices":["At the park.","At the lake.","At Jo’s shed."],"answer":0,"skill":"Find who, what, where and why"},{"prompt":"Why does Jo ask them to wait for their turn?","choices":["To choose the fastest child.","To move all the cones.","To leave room for each child to try the course."],"answer":2,"skill":"Find who, what, where and why"}]},"glossary":{"label":"Listening glossary","prefix":"a","requiredListens":3,"items":[{"word":"log","prompt":"Listen to the glossary word \"log\" three times. Press its picture once for each full listen.","choices":["log"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/log.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":0}},{"word":"hoop","prompt":"Listen to the glossary word \"hoop\" three times. Press its picture once for each full listen.","choices":["hoop"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/hoop.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":1}},{"word":"map","prompt":"Listen to the glossary word \"map\" three times. Press its picture once for each full listen.","choices":["map"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/map.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":2}},{"word":"cone","prompt":"Listen to the glossary word \"cone\" three times. Press its picture once for each full listen.","choices":["cone"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/cone.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":3}},{"word":"rope","prompt":"Listen to the glossary word \"rope\" three times. Press its picture once for each full listen.","choices":["rope"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/rope.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":4}},{"word":"beam","prompt":"Listen to the glossary word \"beam\" three times. Press its picture once for each full listen.","choices":["beam"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/beam.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":5}},{"word":"tunnel","prompt":"Listen to the glossary word \"tunnel\" three times. Press its picture once for each full listen.","choices":["tunnel"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/tunnel.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":6}},{"word":"flag","prompt":"Listen to the glossary word \"flag\" three times. Press its picture once for each full listen.","choices":["flag"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/flag.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":7}},{"word":"foot","prompt":"Listen to the glossary word \"foot\" three times. Press its picture once for each full listen.","choices":["foot"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/foot.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":8}},{"word":"grass","prompt":"Listen to the glossary word \"grass\" three times. Press its picture once for each full listen.","choices":["grass"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/grass.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":9}}]},"characters":{"label":"Meet the characters","prefix":"n","assessable":false,"items":[{"name":"Sam","audio":"assets/audio/characters/sam.wav","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":7}},{"name":"Leila","audio":"assets/audio/characters/leila.wav","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":8}},{"name":"Jo","audio":"assets/audio/characters/jo.wav","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":9}}]},"scenes":{"label":"Picture sentences","prefix":"u","items":[{"prompt":"Choose the sentence that describes picture 1.","choices":["It is a rainy day.","It is a snowy day.","It is a sunny day."],"answer":2,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":0}},{"prompt":"Choose the sentence that describes picture 2.","choices":["Sam and Leila go to the beach with Jo.","Sam and Leila go to the park with Jo.","Sam and Leila go to the lake with Jo."],"answer":1,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":1}},{"prompt":"Choose the sentence that describes picture 3.","choices":["Jo puts a map on the table.","Jo puts a bag on the table.","Jo puts a hoop on the table."],"answer":0,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":2}},{"prompt":"Choose the sentence that describes picture 4.","choices":["Sam sees a blue cone.","Sam sees a yellow cone.","Sam sees a red cone."],"answer":2,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":3}},{"prompt":"Choose the sentence that describes picture 5.","choices":["Leila holds a long rope.","Leila holds a big hoop.","Leila holds a small cone."],"answer":1,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":4}},{"prompt":"Choose the sentence that describes picture 6.","choices":["A log is on the grass.","A log is on the table.","A log is in the water."],"answer":0,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":5}},{"prompt":"Choose the sentence that describes picture 7.","choices":["Sam walks to the table.","Sam walks to the flag.","Sam walks to the log."],"answer":2,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":6}}]},"listenSentences":{"label":"Listen to sentences","prefix":"h","items":[{"word":"log","text":"A log is on the grass.","before":"A ","after":" is on the grass.","audio":"assets/audio/sentences/1.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":0},"prompt":"Listen to the complete sentence: A log is on the grass.","choices":["A log is on the grass."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"hoop","text":"Leila holds a big hoop.","before":"Leila holds a big ","after":".","audio":"assets/audio/sentences/2.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":1},"prompt":"Listen to the complete sentence: Leila holds a big hoop.","choices":["Leila holds a big hoop."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"map","text":"Jo puts a map on the table.","before":"Jo puts a ","after":" on the table.","audio":"assets/audio/sentences/3.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":2},"prompt":"Listen to the complete sentence: Jo puts a map on the table.","choices":["Jo puts a map on the table."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"cone","text":"Sam sees a red cone.","before":"Sam sees a red ","after":".","audio":"assets/audio/sentences/4.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":3},"prompt":"Listen to the complete sentence: Sam sees a red cone.","choices":["Sam sees a red cone."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"rope","text":"Sam steps over the rope.","before":"Sam steps over the ","after":".","audio":"assets/audio/sentences/5.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":4},"prompt":"Listen to the complete sentence: Sam steps over the rope.","choices":["Sam steps over the rope."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"beam","text":"Leila walks on the beam.","before":"Leila walks on the ","after":".","audio":"assets/audio/sentences/6.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":5},"prompt":"Listen to the complete sentence: Leila walks on the beam.","choices":["Leila walks on the beam."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"tunnel","text":"Sam crawls through the tunnel.","before":"Sam crawls through the ","after":".","audio":"assets/audio/sentences/7.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":6},"prompt":"Listen to the complete sentence: Sam crawls through the tunnel.","choices":["Sam crawls through the tunnel."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"flag","text":"The flag is at the end.","before":"The ","after":" is at the end.","audio":"assets/audio/sentences/8.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":7},"prompt":"Listen to the complete sentence: The flag is at the end.","choices":["The flag is at the end."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"foot","text":"Sam lifts his foot.","before":"Sam lifts his ","after":".","audio":"assets/audio/sentences/9.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":8},"prompt":"Listen to the complete sentence: Sam lifts his foot.","choices":["Sam lifts his foot."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"grass","text":"Green grass grows by the log.","before":"Green ","after":" grows by the log.","audio":"assets/audio/sentences/10.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":9},"prompt":"Listen to the complete sentence: Green grass grows by the log.","choices":["Green grass grows by the log."],"answer":0,"skill":"Listen to a complete story-related sentence"}]},"listenFill":{"label":"Listen and fill","prefix":"j","items":[{"word":"log","text":"A log is on the grass.","before":"A ","after":" is on the grass.","audio":"assets/audio/sentences/1.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":0},"prompt":"A ______ is on the grass.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":0,"skill":"Listen and choose the word that completes a sentence"},{"word":"hoop","text":"Leila holds a big hoop.","before":"Leila holds a big ","after":".","audio":"assets/audio/sentences/2.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":1},"prompt":"Leila holds a big ______.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":1,"skill":"Listen and choose the word that completes a sentence"},{"word":"map","text":"Jo puts a map on the table.","before":"Jo puts a ","after":" on the table.","audio":"assets/audio/sentences/3.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":2},"prompt":"Jo puts a ______ on the table.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":2,"skill":"Listen and choose the word that completes a sentence"},{"word":"cone","text":"Sam sees a red cone.","before":"Sam sees a red ","after":".","audio":"assets/audio/sentences/4.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":3},"prompt":"Sam sees a red ______.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":3,"skill":"Listen and choose the word that completes a sentence"},{"word":"rope","text":"Sam steps over the rope.","before":"Sam steps over the ","after":".","audio":"assets/audio/sentences/5.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":4},"prompt":"Sam steps over the ______.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":4,"skill":"Listen and choose the word that completes a sentence"},{"word":"beam","text":"Leila walks on the beam.","before":"Leila walks on the ","after":".","audio":"assets/audio/sentences/6.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":5},"prompt":"Leila walks on the ______.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":5,"skill":"Listen and choose the word that completes a sentence"},{"word":"tunnel","text":"Sam crawls through the tunnel.","before":"Sam crawls through the ","after":".","audio":"assets/audio/sentences/7.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":6},"prompt":"Sam crawls through the ______.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":6,"skill":"Listen and choose the word that completes a sentence"},{"word":"flag","text":"The flag is at the end.","before":"The ","after":" is at the end.","audio":"assets/audio/sentences/8.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":7},"prompt":"The ______ is at the end.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":7,"skill":"Listen and choose the word that completes a sentence"},{"word":"foot","text":"Sam lifts his foot.","before":"Sam lifts his ","after":".","audio":"assets/audio/sentences/9.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":8},"prompt":"Sam lifts his ______.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":8,"skill":"Listen and choose the word that completes a sentence"},{"word":"grass","text":"Green grass grows by the log.","before":"Green ","after":" grows by the log.","audio":"assets/audio/sentences/10.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":9},"prompt":"Green ______ grows by the log.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":9,"skill":"Listen and choose the word that completes a sentence"}]},"spelling":{"version":2,"label":"Spelling","prefix":"s","words":[{"word":"map","prefix":"s0","letters":[{"id":"letter1","text":"a"},{"id":"letter4","text":"z"},{"id":"letter2","text":"p"},{"id":"letter0","text":"m"},{"id":"letter3","text":"s"}],"audio":"assets/audio/spelling/map.wav","picture":{"atlas":"assets/illustrations/spelling-pictures-v1.png","columns":4,"rows":2,"index":0}},{"word":"log","prefix":"s1","letters":[{"id":"letter4","text":"a"},{"id":"letter2","text":"g"},{"id":"letter3","text":"t"},{"id":"letter1","text":"o"},{"id":"letter0","text":"l"}],"audio":"assets/audio/spelling/log.wav","picture":{"atlas":"assets/illustrations/spelling-pictures-v1.png","columns":4,"rows":2,"index":1}},{"word":"hoop","prefix":"s2","letters":[{"id":"letter1","text":"o"},{"id":"letter3","text":"p"},{"id":"letter5","text":"b"},{"id":"letter4","text":"u"},{"id":"letter2","text":"o"},{"id":"letter0","text":"h"}],"audio":"assets/audio/spelling/hoop.wav","picture":{"atlas":"assets/illustrations/spelling-pictures-v1.png","columns":4,"rows":2,"index":2}},{"word":"flag","prefix":"s3","letters":[{"id":"letter0","text":"f"},{"id":"letter1","text":"l"},{"id":"letter2","text":"a"},{"id":"letter3","text":"g"},{"id":"letter4","text":"w"},{"id":"letter5","text":"e"}],"audio":"assets/audio/spelling/flag.wav","picture":{"atlas":"assets/illustrations/spelling-pictures-v1.png","columns":4,"rows":2,"index":3}},{"word":"cone","prefix":"s4","letters":[{"id":"letter2","text":"n"},{"id":"letter3","text":"e"},{"id":"letter5","text":"g"},{"id":"letter0","text":"c"},{"id":"letter1","text":"o"},{"id":"letter4","text":"x"}],"audio":"assets/audio/spelling/cone.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":3}},{"word":"rope","prefix":"s5","letters":[{"id":"letter2","text":"p"},{"id":"letter4","text":"y"},{"id":"letter0","text":"r"},{"id":"letter1","text":"o"},{"id":"letter5","text":"g"},{"id":"letter3","text":"e"}],"audio":"assets/audio/spelling/rope.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":4}},{"word":"foot","prefix":"s6","letters":[{"id":"letter1","text":"o"},{"id":"letter4","text":"y"},{"id":"letter3","text":"t"},{"id":"letter5","text":"g"},{"id":"letter0","text":"f"},{"id":"letter2","text":"o"}],"audio":"assets/audio/spelling/foot.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":8}},{"word":"grass","prefix":"s7","letters":[{"id":"letter0","text":"g"},{"id":"letter4","text":"s"},{"id":"letter5","text":"b"},{"id":"letter6","text":"j"},{"id":"letter2","text":"a"},{"id":"letter1","text":"r"},{"id":"letter3","text":"s"}],"audio":"assets/audio/spelling/grass.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":9}}],"items":[{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["a","z","p","m","s"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["a","g","t","o","l"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["o","p","b","u","o","h"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["f","l","a","g","w","e"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["n","e","g","c","o","x"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["p","y","r","o","g","e"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["o","y","t","g","f","o"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["g","s","b","j","a","r","s"],"answer":0,"skill":"Spell a spoken word using movable letters"}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a foot in a blue shoe.","I can see a bare foot.","I can see a foot in a red shoe."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see a child with arms above the head.","I can see a child with arms down by the sides.","I can see a child with arms out to the sides."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see grass covered in snow.","I can see a green clump of grass.","I can see a brown clump of dry grass."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see a low wooden beam.","I can see a tall wooden beam.","I can see a low metal beam."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":3}}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Sam try shorter, slower steps?","choices":["He wants to move the flag.","He slipped when he hurried.","He wants to jump off the log."],"answer":1,"skill":"Explain why an event or action happens"},{"prompt":"Why does Sam hold out his arms?","choices":["To help him balance on the log.","To lift the log.","To hold the tunnel open."],"answer":0,"skill":"Explain why an event or action happens"}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a big red hoop.","I can see a big blue hoop.","I can see a big yellow hoop."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see a long yellow tunnel.","I can see a short teal tunnel.","I can see a short red tunnel."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see a child with short black hair.","I can see a child with long black hair.","I can see a child with short red hair."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see a hand in a fist.","I can see a hand holding a rope.","I can see an open hand."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":3}}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Sam come back to the hoop?","choices":["Leila is still waiting for her turn.","He wants to hide the hoop.","The tunnel has been moved."],"answer":0,"skill":"Explain why an event or action happens"},{"prompt":"Why does Leila hold the hoop steady?","choices":["So Sam can use it as a flag.","So Sam can roll it away.","So Sam can step through it."],"answer":2,"skill":"Explain why an event or action happens"}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["I can see a blue flag on a pole.","I can see a yellow flag on a pole.","I can see a red flag on a pole."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["I can see an open mouth with a big smile.","I can see a closed mouth with a small smile.","I can see a mouth with a sad frown."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["I can see one pal sitting alone.","I can see two pals walking away.","I can see two pals standing together."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["I can see a winding path covered in snow.","I can see a winding path with grass beside it.","I can see a straight path with grass beside it."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":3}}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Sam wait at the tunnel’s far end?","choices":["He wants to block the exit.","He has decided to leave the park.","He is waiting for and encouraging Leila."],"answer":2,"skill":"Explain why an event or action happens"},{"prompt":"Why is Jo pleased with the children?","choices":["They have raced without waiting.","They have helped each other.","They have moved every obstacle."],"answer":1,"skill":"Explain why an event or action happens"}]}}],"G":[{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows a red cone.","The picture shows a blue cone.","The picture shows a yellow cone."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows a red hoop.","The picture shows a blue hoop.","The picture shows a yellow hoop."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows a log covered in snow.","The picture shows a brown log with bark.","The picture shows a brown log with no bark."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows a map spread out.","The picture shows a map rolled up.","The picture shows a map folded shut."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":0,"index":3}}]},"why":{"label":"Who, what, where & why","prefix":"y","items":[{"prompt":"Who are the two children in this story?","choices":["Sam and Jo","Leila and Jo","Sam and Leila"],"answer":2,"skill":"Find who, what, where and why"},{"prompt":"What shows the way around the course?","choices":["Tall trees.","Red cones.","Blue bags."],"answer":1,"skill":"Find who, what, where and why"},{"prompt":"Where are the children?","choices":["At the park.","At the lake.","At Jo’s shed."],"answer":0,"skill":"Find who, what, where and why"},{"prompt":"Why does Jo ask them to wait for their turn?","choices":["To choose the fastest child.","To move all the cones.","To leave room for each child to try the course."],"answer":2,"skill":"Find who, what, where and why"}]},"glossary":{"label":"Listening glossary","prefix":"a","requiredListens":3,"items":[{"word":"log","prompt":"Listen to the glossary word \"log\" three times. Press its picture once for each full listen.","choices":["log"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/log.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":0}},{"word":"hoop","prompt":"Listen to the glossary word \"hoop\" three times. Press its picture once for each full listen.","choices":["hoop"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/hoop.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":1}},{"word":"map","prompt":"Listen to the glossary word \"map\" three times. Press its picture once for each full listen.","choices":["map"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/map.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":2}},{"word":"cone","prompt":"Listen to the glossary word \"cone\" three times. Press its picture once for each full listen.","choices":["cone"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/cone.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":3}},{"word":"rope","prompt":"Listen to the glossary word \"rope\" three times. Press its picture once for each full listen.","choices":["rope"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/rope.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":4}},{"word":"beam","prompt":"Listen to the glossary word \"beam\" three times. Press its picture once for each full listen.","choices":["beam"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/beam.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":5}},{"word":"tunnel","prompt":"Listen to the glossary word \"tunnel\" three times. Press its picture once for each full listen.","choices":["tunnel"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/tunnel.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":6}},{"word":"flag","prompt":"Listen to the glossary word \"flag\" three times. Press its picture once for each full listen.","choices":["flag"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/flag.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":7}},{"word":"foot","prompt":"Listen to the glossary word \"foot\" three times. Press its picture once for each full listen.","choices":["foot"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/foot.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":8}},{"word":"grass","prompt":"Listen to the glossary word \"grass\" three times. Press its picture once for each full listen.","choices":["grass"],"answer":0,"skill":"Complete three listens to a story glossary word","audio":"assets/audio/glossary/grass.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":9}}]},"characters":{"label":"Meet the characters","prefix":"n","assessable":false,"items":[{"name":"Sam","audio":"assets/audio/characters/sam.wav","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":7}},{"name":"Leila","audio":"assets/audio/characters/leila.wav","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":8}},{"name":"Jo","audio":"assets/audio/characters/jo.wav","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":9}}]},"scenes":{"label":"Picture sentences","prefix":"u","items":[{"prompt":"Choose the sentence that describes picture 1.","choices":["It is a rainy day.","It is a snowy day.","It is a sunny day."],"answer":2,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":0}},{"prompt":"Choose the sentence that describes picture 2.","choices":["Sam and Leila go to the beach with Jo.","Sam and Leila go to the park with Jo.","Sam and Leila go to the lake with Jo."],"answer":1,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":1}},{"prompt":"Choose the sentence that describes picture 3.","choices":["Jo puts a map on the table.","Jo puts a bag on the table.","Jo puts a hoop on the table."],"answer":0,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":2}},{"prompt":"Choose the sentence that describes picture 4.","choices":["Sam sees a blue cone.","Sam sees a yellow cone.","Sam sees a red cone."],"answer":2,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":3}},{"prompt":"Choose the sentence that describes picture 5.","choices":["Leila holds a long rope.","Leila holds a big hoop.","Leila holds a small cone."],"answer":1,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":4}},{"prompt":"Choose the sentence that describes picture 6.","choices":["A log is on the grass.","A log is on the table.","A log is in the water."],"answer":0,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":5}},{"prompt":"Choose the sentence that describes picture 7.","choices":["Sam walks to the table.","Sam walks to the flag.","Sam walks to the log."],"answer":2,"skill":"Read a sentence and identify the pictured action or detail","picture":{"atlas":"assets/illustrations/intro-scenes-and-characters-v1.png","columns":5,"rows":2,"padding":-1.2,"index":6}}]},"listenSentences":{"label":"Listen to sentences","prefix":"h","items":[{"word":"log","text":"A log is on the grass.","before":"A ","after":" is on the grass.","audio":"assets/audio/sentences/1.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":0},"prompt":"Listen to the complete sentence: A log is on the grass.","choices":["A log is on the grass."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"hoop","text":"Leila holds a big hoop.","before":"Leila holds a big ","after":".","audio":"assets/audio/sentences/2.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":1},"prompt":"Listen to the complete sentence: Leila holds a big hoop.","choices":["Leila holds a big hoop."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"map","text":"Jo puts a map on the table.","before":"Jo puts a ","after":" on the table.","audio":"assets/audio/sentences/3.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":2},"prompt":"Listen to the complete sentence: Jo puts a map on the table.","choices":["Jo puts a map on the table."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"cone","text":"Sam sees a red cone.","before":"Sam sees a red ","after":".","audio":"assets/audio/sentences/4.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":3},"prompt":"Listen to the complete sentence: Sam sees a red cone.","choices":["Sam sees a red cone."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"rope","text":"Sam steps over the rope.","before":"Sam steps over the ","after":".","audio":"assets/audio/sentences/5.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":4},"prompt":"Listen to the complete sentence: Sam steps over the rope.","choices":["Sam steps over the rope."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"beam","text":"Leila walks on the beam.","before":"Leila walks on the ","after":".","audio":"assets/audio/sentences/6.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":5},"prompt":"Listen to the complete sentence: Leila walks on the beam.","choices":["Leila walks on the beam."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"tunnel","text":"Sam crawls through the tunnel.","before":"Sam crawls through the ","after":".","audio":"assets/audio/sentences/7.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":6},"prompt":"Listen to the complete sentence: Sam crawls through the tunnel.","choices":["Sam crawls through the tunnel."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"flag","text":"The flag is at the end.","before":"The ","after":" is at the end.","audio":"assets/audio/sentences/8.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":7},"prompt":"Listen to the complete sentence: The flag is at the end.","choices":["The flag is at the end."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"foot","text":"Sam lifts his foot.","before":"Sam lifts his ","after":".","audio":"assets/audio/sentences/9.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":8},"prompt":"Listen to the complete sentence: Sam lifts his foot.","choices":["Sam lifts his foot."],"answer":0,"skill":"Listen to a complete story-related sentence"},{"word":"grass","text":"Green grass grows by the log.","before":"Green ","after":" grows by the log.","audio":"assets/audio/sentences/10.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":9},"prompt":"Listen to the complete sentence: Green grass grows by the log.","choices":["Green grass grows by the log."],"answer":0,"skill":"Listen to a complete story-related sentence"}]},"listenFill":{"label":"Listen and fill","prefix":"j","items":[{"word":"log","text":"A log is on the grass.","before":"A ","after":" is on the grass.","audio":"assets/audio/sentences/1.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":0},"prompt":"A ______ is on the grass.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":0,"skill":"Listen and choose the word that completes a sentence"},{"word":"hoop","text":"Leila holds a big hoop.","before":"Leila holds a big ","after":".","audio":"assets/audio/sentences/2.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":1},"prompt":"Leila holds a big ______.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":1,"skill":"Listen and choose the word that completes a sentence"},{"word":"map","text":"Jo puts a map on the table.","before":"Jo puts a ","after":" on the table.","audio":"assets/audio/sentences/3.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":2},"prompt":"Jo puts a ______ on the table.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":2,"skill":"Listen and choose the word that completes a sentence"},{"word":"cone","text":"Sam sees a red cone.","before":"Sam sees a red ","after":".","audio":"assets/audio/sentences/4.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":3},"prompt":"Sam sees a red ______.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":3,"skill":"Listen and choose the word that completes a sentence"},{"word":"rope","text":"Sam steps over the rope.","before":"Sam steps over the ","after":".","audio":"assets/audio/sentences/5.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":4},"prompt":"Sam steps over the ______.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":4,"skill":"Listen and choose the word that completes a sentence"},{"word":"beam","text":"Leila walks on the beam.","before":"Leila walks on the ","after":".","audio":"assets/audio/sentences/6.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":5},"prompt":"Leila walks on the ______.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":5,"skill":"Listen and choose the word that completes a sentence"},{"word":"tunnel","text":"Sam crawls through the tunnel.","before":"Sam crawls through the ","after":".","audio":"assets/audio/sentences/7.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":6},"prompt":"Sam crawls through the ______.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":6,"skill":"Listen and choose the word that completes a sentence"},{"word":"flag","text":"The flag is at the end.","before":"The ","after":" is at the end.","audio":"assets/audio/sentences/8.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":7},"prompt":"The ______ is at the end.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":7,"skill":"Listen and choose the word that completes a sentence"},{"word":"foot","text":"Sam lifts his foot.","before":"Sam lifts his ","after":".","audio":"assets/audio/sentences/9.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":8},"prompt":"Sam lifts his ______.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":8,"skill":"Listen and choose the word that completes a sentence"},{"word":"grass","text":"Green grass grows by the log.","before":"Green ","after":" grows by the log.","audio":"assets/audio/sentences/10.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":9},"prompt":"Green ______ grows by the log.","choices":["log","hoop","map","cone","rope","beam","tunnel","flag","foot","grass"],"answer":9,"skill":"Listen and choose the word that completes a sentence"}]},"spelling":{"version":2,"label":"Spelling","prefix":"s","words":[{"word":"cone","prefix":"s0","letters":[{"id":"letter2","text":"n"},{"id":"letter1","text":"o"},{"id":"letter4","text":"g"},{"id":"letter5","text":"p"},{"id":"letter0","text":"c"},{"id":"letter3","text":"e"}],"audio":"assets/audio/spelling/cone.wav","picture":{"atlas":"assets/illustrations/spelling-pictures-v1.png","columns":4,"rows":2,"index":4}},{"word":"grass","prefix":"s1","letters":[{"id":"letter1","text":"r"},{"id":"letter3","text":"s"},{"id":"letter6","text":"o"},{"id":"letter0","text":"g"},{"id":"letter5","text":"h"},{"id":"letter2","text":"a"},{"id":"letter4","text":"s"}],"audio":"assets/audio/spelling/grass.wav","picture":{"atlas":"assets/illustrations/spelling-pictures-v1.png","columns":4,"rows":2,"index":5}},{"word":"beam","prefix":"s2","letters":[{"id":"letter0","text":"b"},{"id":"letter2","text":"a"},{"id":"letter3","text":"m"},{"id":"letter5","text":"r"},{"id":"letter4","text":"j"},{"id":"letter1","text":"e"}],"audio":"assets/audio/spelling/beam.wav","picture":{"atlas":"assets/illustrations/spelling-pictures-v1.png","columns":4,"rows":2,"index":6}},{"word":"tunnel","prefix":"s3","letters":[{"id":"letter4","text":"e"},{"id":"letter7","text":"s"},{"id":"letter5","text":"l"},{"id":"letter2","text":"n"},{"id":"letter1","text":"u"},{"id":"letter0","text":"t"},{"id":"letter3","text":"n"},{"id":"letter6","text":"j"}],"audio":"assets/audio/spelling/tunnel.wav","picture":{"atlas":"assets/illustrations/spelling-pictures-v1.png","columns":4,"rows":2,"index":7}},{"word":"log","prefix":"s4","letters":[{"id":"letter0","text":"l"},{"id":"letter1","text":"o"},{"id":"letter2","text":"g"},{"id":"letter4","text":"r"},{"id":"letter3","text":"i"}],"audio":"assets/audio/spelling/log.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":0}},{"word":"hoop","prefix":"s5","letters":[{"id":"letter2","text":"o"},{"id":"letter3","text":"p"},{"id":"letter1","text":"o"},{"id":"letter5","text":"s"},{"id":"letter0","text":"h"},{"id":"letter4","text":"j"}],"audio":"assets/audio/spelling/hoop.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":1}},{"word":"rope","prefix":"s6","letters":[{"id":"letter4","text":"l"},{"id":"letter5","text":"v"},{"id":"letter0","text":"r"},{"id":"letter1","text":"o"},{"id":"letter2","text":"p"},{"id":"letter3","text":"e"}],"audio":"assets/audio/spelling/rope.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":4}},{"word":"flag","prefix":"s7","letters":[{"id":"letter1","text":"l"},{"id":"letter0","text":"f"},{"id":"letter3","text":"g"},{"id":"letter5","text":"w"},{"id":"letter4","text":"p"},{"id":"letter2","text":"a"}],"audio":"assets/audio/spelling/flag.wav","picture":{"atlas":"assets/illustrations/glossary-pictures-v1.png","columns":5,"rows":2,"padding":-1.2,"index":7}}],"items":[{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["n","o","g","p","c","e"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["r","s","o","g","h","a","s"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["b","a","m","r","j","e"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["e","s","l","n","u","t","n","j"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["l","o","g","r","i"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["o","p","o","s","h","j"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["l","v","r","o","p","e"],"answer":0,"skill":"Spell a spoken word using movable letters"},{"prompt":"Listen to the pictured word. Arrange the letters to spell it. There are two extra letters.","choices":["l","f","g","w","p","a"],"answer":0,"skill":"Spell a spoken word using movable letters"}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows a bare foot.","The picture shows a foot in a red shoe.","The picture shows a foot in a blue shoe."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows a child with arms down by the sides.","The picture shows a child with arms out to the sides.","The picture shows a child with arms above the head."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows a green clump of grass.","The picture shows a brown clump of dry grass.","The picture shows grass covered in snow."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows a tall wooden beam.","The picture shows a low metal beam.","The picture shows a low wooden beam."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":1,"index":3}}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Sam try shorter, slower steps?","choices":["He wants to move the flag.","He slipped when he hurried.","He wants to jump off the log."],"answer":1,"skill":"Explain why an event or action happens"},{"prompt":"Why does Sam hold out his arms?","choices":["To help him balance on the log.","To lift the log.","To hold the tunnel open."],"answer":0,"skill":"Explain why an event or action happens"}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows a big blue hoop.","The picture shows a big yellow hoop.","The picture shows a big red hoop."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows a short teal tunnel.","The picture shows a short red tunnel.","The picture shows a long yellow tunnel."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows a child with long black hair.","The picture shows a child with short red hair.","The picture shows a child with short black hair."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows a hand holding a rope.","The picture shows an open hand.","The picture shows a hand in a fist."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":2,"index":3}}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Sam come back to the hoop?","choices":["Leila is still waiting for her turn.","He wants to hide the hoop.","The tunnel has been moved."],"answer":0,"skill":"Explain why an event or action happens"},{"prompt":"Why does Leila hold the hoop steady?","choices":["So Sam can use it as a flag.","So Sam can roll it away.","So Sam can step through it."],"answer":2,"skill":"Explain why an event or action happens"}]}},{"descriptions":{"label":"Picture descriptions","prefix":"d","items":[{"prompt":"Choose the description for picture 1.","choices":["The picture shows a yellow flag on a pole.","The picture shows a red flag on a pole.","The picture shows a blue flag on a pole."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":0}},{"prompt":"Choose the description for picture 2.","choices":["The picture shows a closed mouth with a small smile.","The picture shows a mouth with a sad frown.","The picture shows an open mouth with a big smile."],"answer":2,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":1}},{"prompt":"Choose the description for picture 3.","choices":["The picture shows two pals walking away.","The picture shows two pals standing together.","The picture shows one pal sitting alone."],"answer":1,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":2}},{"prompt":"Choose the description for picture 4.","choices":["The picture shows a winding path with grass beside it.","The picture shows a straight path with grass beside it.","The picture shows a winding path covered in snow."],"answer":0,"skill":"Describe a story picture","picture":{"atlas":"assets/illustrations/chapter-picture-groups-v1.png","columns":4,"row":3,"index":3}}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Sam wait at the tunnel’s far end?","choices":["He wants to block the exit.","He has decided to leave the park.","He is waiting for and encouraging Leila."],"answer":2,"skill":"Explain why an event or action happens"},{"prompt":"Why is Jo pleased with the children?","choices":["They have raced without waiting.","They have helped each other.","They have moved every obstacle."],"answer":1,"skill":"Explain why an event or action happens"}]}}],"L":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"He and Leila were walking to Adventure Park with their guide, Jo, to try a new obstacle ______.","choices":["log","hoop","tunnel","course"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Beyond the gate, children were hopping, balancing and ______.","choices":["looking","checking","crawling","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Sam traced the obstacle course on Jo’s ______.","choices":["flag","map","hoop","tunnel"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Red cones led to a low log, a hoop, a short tunnel, and a yellow finish ______.","choices":["flag","tunnel","cone","beam"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"He ______ to finish before Leila.","choices":["noticed","checked","waited","planned"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"She wanted to learn how each obstacle worked before she ______ it.","choices":["checked","waited","tried","noticed"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will cross","crossed","are crossing"],"answer":0,"skill":"Use the future tense"}]},"why":{"label":"Who, what, where & why","prefix":"y","items":[{"prompt":"Who are the two children in this story?","choices":["Sam and Jo","Leila and Jo","Sam and Leila"],"answer":2,"skill":"Find who, what, where and why"},{"prompt":"What have the children come to try?","choices":["A map-making class.","An obstacle course.","A running race."],"answer":1,"skill":"Find who, what, where and why"},{"prompt":"Where are the children?","choices":["At the park.","At the lake.","At Jo’s shed."],"answer":0,"skill":"Find who, what, where and why"},{"prompt":"Why does Leila look at the course before starting?","choices":["She wants to choose a race winner.","She wants to remove the obstacles.","She wants to work out how to use each obstacle."],"answer":2,"skill":"Find who, what, where and why"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"They crossed the stepping stones first, ______ room for each other.","choices":["looking","checking","leaving","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"His foot slipped, and he ______ onto the grass beside it.","choices":["waited","stepped","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Leila noticed that his eyes had been fixed on the finish ______.","choices":["flag","tunnel","cone","beam"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"She suggested ______ along the log instead.","choices":["waiting","checking","listening","looking"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"With Jo beside the ______, Sam tried again.","choices":["beam","surface","obstacle","cone"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"This time he ______ the other end.","choices":["waited","reached","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crossing carefully.","Sam and Leila cross carefully.","Sam and Leila crosses carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn,\" Jo said.","\"Take your turn\" Jo said.","\"Take your turn, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will cross","crossed","crosses"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are crossing","crossed","will cross"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["crossed","are crossing","will cross"],"answer":2,"skill":"Use the future tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does looking along the log help Sam?","choices":["It stops Leila from taking a turn.","He can notice where to put his feet.","It makes the finish flag move closer."],"answer":1,"skill":"Explain why an event or action happens"},{"prompt":"Why is waiting for Leila part of the challenge?","choices":["They need to finish as partners, not leave one person behind.","Waiting removes the need to cross the log.","Only the person who waits gets to use the hoop."],"answer":0,"skill":"Explain why an event or action happens"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Next came the low ______ and rope.","choices":["flag","beam","hoop","tunnel"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Jo stayed beside the beam as they balanced, then ______ them step over the rope.","choices":["watched","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Leila held the hoop while Sam ______ through.","choices":["noticed","checked","waited","stepped"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"He was already facing the tunnel when he remembered that she had not had a ______.","choices":["beam","surface","turn","cone"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"He ______, but held the hoop too high.","choices":["waited","returned","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Leila could not step through without ______ her foot on the rim.","choices":["catching","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila cross carefully.","Sam and Leila crosses carefully.","Sam and Leila crossing carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn\" Jo said.","\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crossed","crosses","will cross"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["crossed","will cross","are crossing"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["are crossing","will cross","crossed"],"answer":1,"skill":"Use the future tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Sam lower the hoop?","choices":["Leila needs a lower rim to step through.","The tunnel needs a new entrance.","He wants to stop Leila having a turn."],"answer":0,"skill":"Explain why an event or action happens"},{"prompt":"Why is listening to Leila better than repeating the same action?","choices":["Repeating an action always makes an obstacle smaller.","Listening means neither partner has to try the course.","Her words tell Sam what help she actually needs."],"answer":2,"skill":"Explain why an event or action happens"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"On the last stretch, they weaved through the zigzag ______ side by side.","choices":["cones","tunnel","flag","cone"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Leila crawled through the tunnel, while Sam ______ at the far end.","choices":["noticed","checked","guided","waited"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"When she emerged, he ______ if she was ready for the last stretch.","choices":["checked","waited","asked","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"They walked between the final cones and ______ the yellow flag together.","choices":["waited","touched","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Sam had forgotten to count how long the ______ took.","choices":["course","partner","route","team"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Leila chose the ______; Sam chose learning to wait.","choices":["route","team","map","hoop"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will cross","crossed","are crossing"],"answer":0,"skill":"Use the future tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why do the children reach the flag together?","choices":["Jo has shortened the course for Sam alone.","Leila has stopped taking part.","Sam has learned to wait and include his partner."],"answer":2,"skill":"Explain why an event or action happens"},{"prompt":"Why does Sam draw two people beside the flag?","choices":["He wants to replace the course map with a race result.","His plan now includes both partners finishing.","He wants to show two separate winning times."],"answer":1,"skill":"Explain why an event or action happens"}]}}],"M":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"He walked to Adventure Park with Leila and their guide, Jo, to try the new ______.","choices":["log","hoop","tunnel","course"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Red cones led past stones, a beam, a low rope, a log, a hoop and a ______.","choices":["hoop","flag","tunnel","log"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Sam ______ to race ahead.","choices":["waited","wanted","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Leila wanted to inspect each ______.","choices":["obstacle","tunnel","flag","cone"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"“Help your ______ reach the yellow flag.","choices":["flag","cone","beam","partner"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Sam woke to a sunny ______.","choices":["log","hoop","Saturday","course"],"answer":2,"skill":"Complete a story sentence"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will cross","crossed","are crossing"],"answer":0,"skill":"Use the future tense"}]},"why":{"label":"Who, what, where & why","prefix":"y","items":[{"prompt":"Who are the two children in this story?","choices":["Sam and Jo","Leila and Jo","Sam and Leila"],"answer":2,"skill":"Find who, what, where and why"},{"prompt":"What have the children come to try?","choices":["A map-making class.","An obstacle course.","A running race."],"answer":1,"skill":"Find who, what, where and why"},{"prompt":"Where are the children?","choices":["At the park.","At the lake.","At Jo’s shed."],"answer":0,"skill":"Find who, what, where and why"},{"prompt":"Why does Leila look at the course before starting?","choices":["She wants to choose a race winner.","She wants to remove the obstacles.","She wants to work out how to use each obstacle."],"answer":2,"skill":"Find who, what, where and why"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"After crossing the stones, Sam watched the flag instead of the ______.","choices":["tunnel","flag","log","hoop"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"His foot ______ onto the grass.","choices":["waited","slipped","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"“Look at the wood,” Leila ______.","choices":["suggested","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"His new approach ______ better than speed.","choices":["noticed","checked","waited","worked"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"He crossed safely, then ______.","choices":["checked","guided","waited","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"After crossing the stones, Sam watched the flag ______ of the log.","choices":["hoop","instead","course","log"],"answer":1,"skill":"Complete a story sentence"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crossing carefully.","Sam and Leila cross carefully.","Sam and Leila crosses carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn,\" Jo said.","\"Take your turn\" Jo said.","\"Take your turn, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will cross","crossed","crosses"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are crossing","crossed","will cross"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["crossed","are crossing","will cross"],"answer":2,"skill":"Use the future tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does looking along the log help Sam?","choices":["It stops Leila from taking a turn.","He can notice where to put his feet.","It makes the finish flag move closer."],"answer":1,"skill":"Explain why an event or action happens"},{"prompt":"Why is waiting for Leila part of the challenge?","choices":["They need to finish as partners, not leave one person behind.","Waiting removes the need to cross the log.","Only the person who waits gets to use the hoop."],"answer":0,"skill":"Explain why an event or action happens"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"They crossed the ______ and low rope with Jo nearby.","choices":["flag","beam","hoop","tunnel"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"He almost left, then remembered her ______.","choices":["turn","tunnel","flag","cone"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Sam lowered and ______ it.","choices":["noticed","checked","waited","steadied"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Helping meant ______ to what Leila needed.","choices":["looking","checking","listening","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"They crossed the beam and low rope with Jo ______.","choices":["hoop","nearby","course","log"],"answer":1,"skill":"Complete a story sentence"},{"prompt":"They crossed the beam and low ______ with Jo nearby.","choices":["rope","course","log","hoop"],"answer":0,"skill":"Complete a story sentence"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila cross carefully.","Sam and Leila crosses carefully.","Sam and Leila crossing carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn\" Jo said.","\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crossed","crosses","will cross"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["crossed","will cross","are crossing"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["are crossing","will cross","crossed"],"answer":1,"skill":"Use the future tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Sam lower the hoop?","choices":["Leila needs a lower rim to step through.","The tunnel needs a new entrance.","He wants to stop Leila having a turn."],"answer":0,"skill":"Explain why an event or action happens"},{"prompt":"Why is listening to Leila better than repeating the same action?","choices":["Repeating an action always makes an obstacle smaller.","Listening means neither partner has to try the course.","Her words tell Sam what help she actually needs."],"answer":2,"skill":"Explain why an event or action happens"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"On the last stretch, they weaved through the zigzag ______ side by side.","choices":["cones","tunnel","flag","cone"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Sam waited where Leila could see him as she ______ through the tunnel.","choices":["noticed","checked","waited","crawled"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"They followed the final cones and touched the ______ together.","choices":["surface","partner","flag","beam"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Leila named the hoop as her hardest ______; Sam said learning to wait was harder.","choices":["partner","obstacle","beam","surface"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"His next plan would include both ______ at the finish.","choices":["partners","surface","partner","route"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"On the last stretch, they weaved through the zigzag cones side by ______.","choices":["course","log","hoop","side"],"answer":3,"skill":"Complete a story sentence"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"Tomorrow, the friends ______ together.","choices":["will cross","crossed","are crossing"],"answer":0,"skill":"Use the future tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why do the children reach the flag together?","choices":["Jo has shortened the course for Sam alone.","Leila has stopped taking part.","Sam has learned to wait and include his partner."],"answer":2,"skill":"Explain why an event or action happens"},{"prompt":"Why does Sam draw two people beside the flag?","choices":["He wants to replace the course map with a race result.","His plan now includes both partners finishing.","He wants to show two separate winning times."],"answer":1,"skill":"Explain why an event or action happens"}]}}],"N":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"He and Leila walked to Adventure Park with their guide, Jo, to try the new obstacle ______.","choices":["log","hoop","tunnel","course"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"A yellow flag fluttered beyond stepping stones, a beam, a low rope, a log, a hoop and a ______.","choices":["hoop","flag","tunnel","log"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Sam nodded, but he was already ______ to finish first.","choices":["checking","planning","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Leila studied the ______ and asked who would hold the hoop.","choices":["route","tunnel","flag","cone"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Sam ______ his head.","choices":["noticed","checked","waited","turned"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"he ______.","choices":["checked","waited","called","noticed"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["had crossed","will cross","are crossing"],"answer":0,"skill":"Use the past perfect tense"}]},"why":{"label":"Who, what, where & why","prefix":"y","items":[{"prompt":"Who are the two children in this story?","choices":["Sam and Jo","Leila and Jo","Sam and Leila"],"answer":2,"skill":"Find who, what, where and why"},{"prompt":"What have the children come to try?","choices":["A map-making class.","An obstacle course.","A running race."],"answer":1,"skill":"Find who, what, where and why"},{"prompt":"Where are the children?","choices":["At the park.","At the lake.","At Jo’s shed."],"answer":0,"skill":"Find who, what, where and why"},{"prompt":"Why does Leila look at the course before starting?","choices":["She wants to choose a race winner.","She wants to remove the obstacles.","She wants to work out how to use each obstacle."],"answer":2,"skill":"Find who, what, where and why"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"After the stones, Sam hurried onto the log and ______ onto the grass.","choices":["checked","waited","slipped","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"He hated needing help and almost ______ Leila’s advice.","choices":["waited","rejected","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Then he ______ the uneven surface.","choices":["studied","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Shorter steps ______ him cross with Jo nearby.","choices":["noticed","checked","waited","helped"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Waiting for Leila meant ______ up his lead.","choices":["looking","checking","giving","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"After the stones, Sam hurried onto the log and slipped onto the ______.","choices":["hoop","grass","course","log"],"answer":1,"skill":"Complete a story sentence"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crossing carefully.","Sam and Leila cross carefully.","Sam and Leila crosses carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn,\" Jo said.","\"Take your turn\" Jo said.","\"Take your turn, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will cross","crossed","crosses"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are crossing","crossed","will cross"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["will cross","are crossing","had crossed"],"answer":2,"skill":"Use the past perfect tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does looking along the log help Sam?","choices":["It stops Leila from taking a turn.","He can notice where to put his feet.","It makes the finish flag move closer."],"answer":1,"skill":"Explain why an event or action happens"},{"prompt":"Why is waiting for Leila part of the challenge?","choices":["They need to finish as partners, not leave one person behind.","Waiting removes the need to cross the log.","Only the person who waits gets to use the hoop."],"answer":0,"skill":"Explain why an event or action happens"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"They crossed the ______ and rope with Jo nearby.","choices":["flag","beam","hoop","tunnel"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Her shorter height ______ a different problem.","choices":["created","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Sam felt impatient, then ______.","choices":["noticed","checked","waited","listened"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"He lowered and ______ it.","choices":["checked","waited","steadied","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"He ______ for her signal.","choices":["guided","waited","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"They crossed the beam and rope with Jo ______.","choices":["nearby","course","log","hoop"],"answer":0,"skill":"Complete a story sentence"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila cross carefully.","Sam and Leila crosses carefully.","Sam and Leila crossing carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn\" Jo said.","\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crossed","crosses","will cross"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["crossed","will cross","are crossing"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["are crossing","had crossed","will cross"],"answer":1,"skill":"Use the past perfect tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Sam lower the hoop?","choices":["Leila needs a lower rim to step through.","The tunnel needs a new entrance.","He wants to stop Leila having a turn."],"answer":0,"skill":"Explain why an event or action happens"},{"prompt":"Why is listening to Leila better than repeating the same action?","choices":["Repeating an action always makes an obstacle smaller.","Listening means neither partner has to try the course.","Her words tell Sam what help she actually needs."],"answer":2,"skill":"Explain why an event or action happens"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Sam waited until Leila came out of the ______.","choices":["tunnel","flag","cone","beam"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"They weaved through the ______ and reached the flag together.","choices":["flag","cone","beam","cones"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"“I kept making it a race,” Sam ______.","choices":["checked","waited","admitted","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Her notes recorded smaller steps, a lower ______ and listening.","choices":["route","hoop","surface","partner"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Sam drew two ______ beside the flag, neither in front.","choices":["partners","surface","partner","route"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Sam waited until Leila ______ out of the tunnel.","choices":["course","log","hoop","came"],"answer":3,"skill":"Complete a story sentence"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["had crossed","will cross","are crossing"],"answer":0,"skill":"Use the past perfect tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why do the children reach the flag together?","choices":["Jo has shortened the course for Sam alone.","Leila has stopped taking part.","Sam has learned to wait and include his partner."],"answer":2,"skill":"Explain why an event or action happens"},{"prompt":"Why does Sam draw two people beside the flag?","choices":["He wants to replace the course map with a race result.","His plan now includes both partners finishing.","He wants to show two separate winning times."],"answer":1,"skill":"Explain why an event or action happens"}]}}],"P":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Sam woke to sunshine on Saturday ______.","choices":["waiting","looking","checking","morning"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"He packed his water bottle and ______ to Adventure Park with Leila and their guide, Jo.","choices":["checked","waited","walked","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Today they were trying the new obstacle ______.","choices":["cone","course","tunnel","flag"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Beyond the gate were stepping stones, a low rope, a balance beam, a log, a hoop and a ______.","choices":["tunnel","flag","cone","beam"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Red cones led to a yellow ______ at the finish.","choices":["cone","beam","surface","flag"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"“Some parts require a ______,” Jo said.","choices":["beam","surface","partner","cone"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["had crossed","will cross","are crossing"],"answer":0,"skill":"Use the past perfect tense"}]},"why":{"label":"Who, what, where & why","prefix":"y","items":[{"prompt":"Who are the two children in this story?","choices":["Sam and Jo","Leila and Jo","Sam and Leila"],"answer":2,"skill":"Find who, what, where and why"},{"prompt":"What have the children come to try?","choices":["A map-making class.","An obstacle course.","A running race."],"answer":1,"skill":"Find who, what, where and why"},{"prompt":"Where are the children?","choices":["At the park.","At the lake.","At Jo’s shed."],"answer":0,"skill":"Find who, what, where and why"},{"prompt":"Why does Leila look at the course before starting?","choices":["She wants to choose a race winner.","She wants to remove the obstacles.","She wants to work out how to use each obstacle."],"answer":2,"skill":"Find who, what, where and why"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Leila placed the ______ card on a bench.","choices":["tunnel","flag","course","hoop"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Red cones linked the stepping stones, beam, low rope, log, hoop, tunnel and ______.","choices":["cone","flag","hoop","tunnel"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Sam traced the quickest ______; Leila noticed waiting spaces.","choices":["route","tunnel","flag","cone"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Their ideas of progress ______.","choices":["noticed","checked","waited","differed"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Both ______.","choices":["checked","waited","mattered","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Sam marked the ______ because someone must hold it.","choices":["route","hoop","surface","partner"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crossing carefully.","Sam and Leila cross carefully.","Sam and Leila crosses carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn,\" Jo said.","\"Take your turn\" Jo said.","\"Take your turn, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will cross","crossed","crosses"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are crossing","crossed","will cross"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["will cross","are crossing","had crossed"],"answer":2,"skill":"Use the past perfect tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Leila notice the waiting spaces on the card?","choices":["She plans to move all the cones.","She is thinking about leaving room for each partner.","She wants Sam to skip the course."],"answer":1,"skill":"Explain why an event or action happens"},{"prompt":"Why does Sam mark the hoop on the card?","choices":["Someone will need to hold it for a partner.","It is the place where they will record a winning time.","It is the only obstacle they are allowed to use."],"answer":0,"skill":"Explain why an event or action happens"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"First they crossed the stepping stones, ______ room between them.","choices":["checking","leaving","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Sam began in three quick steps, while Leila ______ where her feet would go.","choices":["checked","noticed","waited","guided"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"His question about her slowness ______ impatient.","choices":["noticed","checked","waited","sounded"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"He assumed the ______ needed little planning.","choices":["surface","partner","log","beam"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Jo kept room beside it for ______ safely onto grass and told them to wait for her signal.","choices":["checking","stepping","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Still watching the ______, Sam prepared to cross without looking closely.","choices":["flag","partner","route","team"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila cross carefully.","Sam and Leila crosses carefully.","Sam and Leila crossing carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn\" Jo said.","\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crossed","crosses","will cross"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["crossed","will cross","are crossing"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["are crossing","had crossed","will cross"],"answer":1,"skill":"Use the past perfect tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Jo keep space beside the log clear?","choices":["A child may need to step safely onto the grass.","She wants to hide the course card there.","The space will make the log longer."],"answer":0,"skill":"Explain why an event or action happens"},{"prompt":"Why does Leila stand clear of Sam’s first step?","choices":["She wants to stop him reading the card.","She has decided to leave the park.","He needs room to cross without another person in the way."],"answer":2,"skill":"Explain why an event or action happens"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Watching the ______, Sam hurried onto the log and slipped onto the grass.","choices":["flag","tunnel","cone","beam"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"He nearly rejected Leila’s advice because he disliked ______ help.","choices":["waiting","looking","checking","needing"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Then he ______ the uneven surface.","choices":["waited","guided","noticed","checked"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"With Jo nearby, he used shorter steps, spread his arms and ______ safely.","choices":["waited","crossed","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Leila ______ for his nod.","choices":["waited","noticed","checked","guided"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Staying to watch her felt harder than balancing: he must surrender his ______ lead and notice her careful foot.","choices":["noticed","checked","waited","imagined"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["had crossed","will cross","are crossing"],"answer":0,"skill":"Use the past perfect tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Sam try shorter steps?","choices":["The log has been moved closer to the flag.","Leila has asked him to jump over the log.","His first hurried attempt ended in a slip."],"answer":2,"skill":"Explain why an event or action happens"},{"prompt":"Why does Leila wait for Sam’s nod?","choices":["She is waiting for a race time.","She needs to know that it is her turn to begin.","The nod will make the log level."],"answer":1,"skill":"Explain why an event or action happens"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Sam watched Leila’s feet adjust to the ______.","choices":["cone","beam","surface","log"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"He almost repeated her advice, but another voice might distract someone already ______ carefully.","choices":["looking","checking","moving","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Afterwards, he asked which patch ______ most attention.","choices":["waited","needed","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"She identified a raised section where she had ______.","choices":["paused","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Watching had revealed her decisions, rather than simply her slower ______.","choices":["noticed","checked","waited","speed"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Together they followed the next ______ cone towards the hoop.","choices":["checked","waited","red","noticed"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crossing carefully.","Sam and Leila cross carefully.","Sam and Leila crosses carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn,\" Jo said.","\"Take your turn\" Jo said.","\"Take your turn, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will cross","crossed","crosses"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are crossing","crossed","will cross"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["will cross","are crossing","had crossed"],"answer":2,"skill":"Use the past perfect tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Sam stay quiet while Leila crosses?","choices":["He wants her to stop halfway.","Talking could distract her while she is balancing.","He has forgotten how the course works."],"answer":1,"skill":"Explain why an event or action happens"},{"prompt":"Why does Sam ask about the raised patch afterwards?","choices":["He wants to understand which part needed care.","He wants to remove Leila’s turn from the plan.","He wants to hide the log from Jo."],"answer":0,"skill":"Explain why an event or action happens"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Leila held the yellow hoop steady and ______ if Sam was ready.","choices":["checked","waited","asked","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Her holding and his ______ had to work together.","choices":["checking","stepping","waiting","looking"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Jo kept the space clear for one ______ at a time.","choices":["turn","surface","partner","route"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Sam ______ to return and hold it for Leila.","choices":["noticed","checked","waited","promised"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Looking towards the ______, he realised that remembering this while approaching the next obstacle would demand more attention than making a promise while standing still.","choices":["map","challenge","tunnel","team"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Leila held the yellow hoop steady and asked if Sam was ______.","choices":["hoop","ready","course","log"],"answer":1,"skill":"Complete a story sentence"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila cross carefully.","Sam and Leila crosses carefully.","Sam and Leila crossing carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn\" Jo said.","\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “it is”.","choices":["it's","isn't","it'll"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crossed","crosses","will cross"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["crossed","will cross","are crossing"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["are crossing","had crossed","will cross"],"answer":1,"skill":"Use the past perfect tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Leila hold the hoop steady?","choices":["Sam needs a still hoop to step through.","The hoop needs to be rolled to the flag.","They are using the hoop as a timer."],"answer":0,"skill":"Explain why an event or action happens"},{"prompt":"Why does Sam promise to return?","choices":["He wants to take the hoop home.","Jo has asked him to skip the tunnel.","Leila will need him to hold the hoop for her turn."],"answer":2,"skill":"Explain why an event or action happens"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"After stepping through the hoop, Sam ______ Leila’s reminder to return.","choices":["waited","needed","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Her foot caught its rim at his ______ height.","choices":["stepping","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"His first feeling was impatience; then he ______ that she was shorter.","choices":["checked","waited","guided","noticed"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Sam lowered the hoop and ______ it with both hands.","choices":["checked","waited","steadied","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"She ______ through easily.","choices":["waited","passed","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"He ______ for her signal.","choices":["waited","noticed","checked","guided"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["had crossed","will cross","are crossing"],"answer":0,"skill":"Use the past perfect tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does the hoop need to be lower for Leila?","choices":["She is carrying the course map inside it.","She wants to roll the hoop away.","She is shorter than Sam."],"answer":2,"skill":"Explain why an event or action happens"},{"prompt":"Why does Sam wait for Leila’s signal?","choices":["Her signal will move the tunnel.","She should be ready before he changes what he is doing.","Her signal will record a winning time."],"answer":1,"skill":"Explain why an event or action happens"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Leila studied the ______ entrance and the light beyond it.","choices":["tunnel","partner","route","team"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Instead of calling it easy, Sam ______ what would help.","choices":["noticed","checked","waited","asked"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"She ______ to know where he would wait.","choices":["checked","waited","needed","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Jo ______ the tunnel.","choices":["guided","checked","noticed","waited"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Sam stood where Leila could see his shoes, then ______ aside to leave room to come out.","choices":["moved","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Leila studied the tunnel entrance and the light ______ it.","choices":["course","log","hoop","beyond"],"answer":3,"skill":"Complete a story sentence"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crossing carefully.","Sam and Leila cross carefully.","Sam and Leila crosses carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn,\" Jo said.","\"Take your turn\" Jo said.","\"Take your turn, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will cross","crossed","crosses"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are crossing","crossed","will cross"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["will cross","are crossing","had crossed"],"answer":2,"skill":"Use the past perfect tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Sam wait where Leila can see his shoes?","choices":["He is hiding the course card.","Knowing where he is helps her feel ready.","He wants to block the tunnel entrance."],"answer":1,"skill":"Explain why an event or action happens"},{"prompt":"Why does Sam move to one side of the exit?","choices":["Leila needs room to come out.","He wants to go back into the hoop.","The exit is where they sort the cones."],"answer":0,"skill":"Explain why an event or action happens"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"A zigzag line of ______ remained before the flag.","choices":["partner","route","team","cones"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Sam resisted running ahead while Leila ______ grass from her knees.","choices":["checked","waited","brushed","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"He waited, then matched their ______ pace.","choices":["waited","shared","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"The ______ had barely changed.","choices":["course","log","hoop","tunnel"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"The important adjustments were in how they noticed, ______ and responded.","choices":["noticed","checked","waited","listened"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"They laughed about the ______’s changing height and approached the finish together.","choices":["flag","cone","hoop","tunnel"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila cross carefully.","Sam and Leila crosses carefully.","Sam and Leila crossing carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn\" Jo said.","\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crossed","crosses","will cross"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["crossed","will cross","are crossing"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["are crossing","had crossed","will cross"],"answer":1,"skill":"Use the past perfect tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Sam match Leila’s pace?","choices":["They can reach the finish together.","He wants her to stop walking.","They are trying to record separate times."],"answer":0,"skill":"Explain why an event or action happens"},{"prompt":"Why is waiting more useful than running ahead here?","choices":["It changes the positions of the obstacles.","It removes the last cones from the course.","It gives his partner time and keeps them working together."],"answer":2,"skill":"Explain why an event or action happens"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"At the finish, Leila remembered the tunnel, but named the hoop as her hardest ______.","choices":["team","map","obstacle","route"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"“I kept wanting to make it a race,” Sam ______.","choices":["waited","admitted","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Jo left the time box empty and recorded smaller steps, a lower ______ and time to listen.","choices":["hoop","course","log","tunnel"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Sam valued this shared progress without a ______ time.","choices":["waiting","looking","checking","winning"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"On his ______, two figures stood beside the yellow flag, with room to finish together.","choices":["tunnel","flag","map","hoop"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"At the finish, Leila remembered the tunnel, but named the hoop as her ______ obstacle.","choices":["hoop","hardest","course","log"],"answer":1,"skill":"Complete a story sentence"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["had crossed","will cross","are crossing"],"answer":0,"skill":"Use the past perfect tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Jo record changes instead of a time?","choices":["The children never reached the flag.","She has forgotten which course they used.","The challenge is about learning to help each other."],"answer":2,"skill":"Explain why an event or action happens"},{"prompt":"Why does Sam draw room for two figures at the finish?","choices":["He wants to leave Leila out of the plan.","He now values a shared finish.","He wants to show which child won."],"answer":1,"skill":"Explain why an event or action happens"}]}}],"R":[{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"On a sunny Saturday, Sam and Leila walked to Adventure Park with Jo to try its new obstacle ______.","choices":["log","hoop","tunnel","course"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Sam read the course card, picturing a fast trip over the stones, low rope, beam and log, through the hoop and then a quick crawl through the ______.","choices":["hoop","flag","tunnel","log"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"He wanted to reach the yellow ______ first.","choices":["cone","flag","hoop","tunnel"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Was the ______ secure?","choices":["log","flag","cone","beam"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Who would hold the ______ first?","choices":["cone","beam","surface","hoop"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Where should a ______ wait without blocking the next person?","choices":["beam","surface","partner","cone"],"answer":2,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “do not”.","choices":["doesn't","didn't","don't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["had crossed","will cross","are crossing"],"answer":0,"skill":"Use the past perfect tense"}]},"why":{"label":"Who, what, where & why","prefix":"y","items":[{"prompt":"Who are the two children in this story?","choices":["Sam and Jo","Leila and Jo","Sam and Leila"],"answer":2,"skill":"Find who, what, where and why"},{"prompt":"What have the children come to try?","choices":["A map-making class.","An obstacle course.","A running race."],"answer":1,"skill":"Find who, what, where and why"},{"prompt":"Where are the children?","choices":["At the park.","At the lake.","At Jo’s shed."],"answer":0,"skill":"Find who, what, where and why"},{"prompt":"Why does Leila look at the course before starting?","choices":["She wants to choose a race winner.","She wants to remove the obstacles.","She wants to work out how to use each obstacle."],"answer":2,"skill":"Find who, what, where and why"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"They crossed the stepping stones first, ______ room for each other.","choices":["looking","checking","leaving","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"On the low log, Sam ______ towards the finish rather than at the wood under his feet.","choices":["waited","looked","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"His foot slid sideways, and he ______ off onto the grass.","choices":["stepped","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"______ hurt except his sense that this part ought to have been easy.","choices":["waiting","looking","checking","Nothing"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"Leila ______ shorter steps and a closer focus.","choices":["checked","waited","suggested","noticed"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Sam prepared a reply about knowing how to walk, then noticed a raised patch on the log that he had ______ to see.","choices":["waited","failed","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crossing carefully.","Sam and Leila cross carefully.","Sam and Leila crosses carefully."],"answer":1,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn,\" Jo said.","\"Take your turn\" Jo said.","\"Take your turn, Jo said.\""],"answer":0,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Them","Their","They"],"answer":2,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “they are”.","choices":["they'll","they're","they've"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We would","We have","We had"],"answer":2,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["will cross","crossed","crosses"],"answer":1,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["are crossing","crossed","will cross"],"answer":0,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["will cross","are crossing","had crossed"],"answer":2,"skill":"Use the past perfect tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does looking along the log help Sam?","choices":["It stops Leila from taking a turn.","He can notice where to put his feet.","It makes the finish flag move closer."],"answer":1,"skill":"Explain why an event or action happens"},{"prompt":"Why is waiting for Leila part of the challenge?","choices":["They need to finish as partners, not leave one person behind.","Waiting removes the need to cross the log.","Only the person who waits gets to use the hoop."],"answer":0,"skill":"Explain why an event or action happens"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"Next came the low ______ and rope.","choices":["flag","beam","hoop","tunnel"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Jo stayed beside the beam as they balanced, then ______ them step over the rope.","choices":["watched","noticed","checked","waited"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Sam ______ easily through the hoop Leila held.","choices":["noticed","checked","waited","stepped"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"When he returned to hold it for her, he copied its position precisely, as if sameness would guarantee that he was ______ a fair partner.","choices":["looking","checking","being","waiting"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"She stepped back and asked for the hoop to be ______.","choices":["waited","lowered","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Sam felt the first flicker of annoyance: he had copied what she had done, so why was she asking for ______ different?","choices":["something","waiting","looking","checking"],"answer":0,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila cross carefully.","Sam and Leila crosses carefully.","Sam and Leila crossing carefully."],"answer":0,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn\" Jo said.","\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said."],"answer":2,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["Their","They","Them"],"answer":1,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “we will”.","choices":["we'll","we're","we've"],"answer":0,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We have","We had","We would"],"answer":1,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crossed","crosses","will cross"],"answer":0,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["crossed","will cross","are crossing"],"answer":2,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["are crossing","had crossed","will cross"],"answer":1,"skill":"Use the past perfect tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why does Sam lower the hoop?","choices":["Leila needs a lower rim to step through.","The tunnel needs a new entrance.","He wants to stop Leila having a turn."],"answer":0,"skill":"Explain why an event or action happens"},{"prompt":"Why is listening to Leila better than repeating the same action?","choices":["Repeating an action always makes an obstacle smaller.","Listening means neither partner has to try the course.","Her words tell Sam what help she actually needs."],"answer":2,"skill":"Explain why an event or action happens"}]}},{"extraCloze":{"label":"More cloze","prefix":"e","items":[{"prompt":"On the last stretch, they weaved through the zigzag ______ side by side.","choices":["cones","tunnel","flag","cone"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"At the ______’s exit, Sam waited until Leila could see him before asking whether she was ready.","choices":["cone","beam","surface","tunnel"],"answer":3,"skill":"Use context to complete a passage"},{"prompt":"They followed the final cones and reached the yellow ______ together.","choices":["surface","partner","flag","beam"],"answer":2,"skill":"Use context to complete a passage"},{"prompt":"Jo ______ about difficulty rather than time.","choices":["waited","asked","noticed","checked"],"answer":1,"skill":"Use context to complete a passage"},{"prompt":"Leila described the ______.","choices":["hoop","partner","route","team"],"answer":0,"skill":"Use context to complete a passage"},{"prompt":"Sam considered the log, then chose a less visible ______: his habit of turning every shared task into a private race.","choices":["partner","route","team","obstacle"],"answer":3,"skill":"Use context to complete a passage"}]},"grammar":{"label":"Grammar","prefix":"g","items":[{"prompt":"Choose the sentence with correct subject–verb agreement.","choices":["Sam and Leila crosses carefully.","Sam and Leila crossing carefully.","Sam and Leila cross carefully."],"answer":2,"skill":"Subject–verb agreement"},{"prompt":"Choose the sentence with correct speech punctuation.","choices":["\"Take your turn, Jo said.\"","\"Take your turn,\" Jo said.","\"Take your turn\" Jo said."],"answer":1,"skill":"Punctuate direct speech"},{"prompt":"Complete the sentence: Sam and Leila checked the course. ______ worked together.","choices":["They","Them","Their"],"answer":0,"skill":"Choose a subject pronoun"}]},"contractions":{"label":"Contractions","prefix":"k","items":[{"prompt":"Choose the contraction for “could not”.","choices":["wouldn't","shouldn't","couldn't"],"answer":2,"skill":"Use contractions accurately"},{"prompt":"Choose the contraction for “we have”.","choices":["we'll","we've","we'd"],"answer":1,"skill":"Use contractions accurately"},{"prompt":"In “We’d finished the checks before Jo arrived,” what does “We’d” mean?","choices":["We had","We would","We have"],"answer":0,"skill":"Interpret a contraction in context"}]},"tenses":{"label":"Tenses","prefix":"z","items":[{"prompt":"Yesterday, the friends ______ carefully.","choices":["crosses","will cross","crossed"],"answer":2,"skill":"Use the simple past tense"},{"prompt":"Right now, the friends ______ carefully.","choices":["will cross","are crossing","crossed"],"answer":1,"skill":"Use the present progressive tense"},{"prompt":"By the time Jo arrived, the friends ______ the course.","choices":["had crossed","will cross","are crossing"],"answer":0,"skill":"Use the past perfect tense"}]},"why":{"label":"Why questions","prefix":"y","items":[{"prompt":"Why do the children reach the flag together?","choices":["Jo has shortened the course for Sam alone.","Leila has stopped taking part.","Sam has learned to wait and include his partner."],"answer":2,"skill":"Explain why an event or action happens"},{"prompt":"Why does Sam draw two people beside the flag?","choices":["He wants to replace the course map with a race result.","His plan now includes both partners finishing.","He wants to show two separate winning times."],"answer":1,"skill":"Explain why an event or action happens"}]}}]};

window.SIMPLE_N_REPLACEMENTS=[["straightforward","easy"],["dismissed","ignored"],["supervised","watched"],["supervise","watch"],["sacrifice Mia’s chance of the winning time","cost Mia the fastest time"],["responsible decisions","sensible choices"],["preparation","careful planning"],["Giving up his imagined lead to wait for Leila","Waiting for Leila instead of staying ahead"],["challenged Sam’s priorities","made Sam think about his partner"],["defensive","upset"],["[[emerged]] from the tunnel","[[came out]] of the tunnel"],["emerged","came out"],["steadied the canoe","held the canoe still"],["stowed","put"],["falter","break"],["signalled","showed"],["sheltered bay","calm bay"],["unexpected discoveries","new discoveries"],["unconfirmed name","guessed name"],["establish identity","prove they were the same kind of rock"],["grain colours and arrangements","grain colours and patterns"],["characteristic","feature"],["specimens","samples"],["specimen","sample"],["represented","showed"],["circled the bay","drew a circle around the bay"],["rhythm","beat"],["revise","change"],["centred on","was about"],["concerned","was about"],["Mia’s loosening stomach knot showed [[relief]].","Mia’s stomach no longer felt tight. She felt [[relief]] after the problem was fixed."]];
