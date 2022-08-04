const templateCardPage = {
  tag: 'div',
  cls: 'container-game-page',
  content: [
    {
      tag: 'div',
      cls: 'container-header-game',
      content: [
        {
          tag: 'div',
          cls: 'container-header-timer',
          content: [
            {
              tag: 'div',
              cls: 'container-timer-up',
              content: [
                {
                  tag: 'div',
                  cls: 'timer-text',
                  content: 'min',
                },
                {
                  tag: 'div',
                  cls: 'timer-text',
                  content: 'sec',
                },
              ],
            },
            {
              tag: 'div',
              cls: 'container-timer-down',
              content: [
                {
                  tag: 'div',
                  cls: 'timer-min',
                  content: '00',
                },
                {
                  tag: 'div',
                  cls: 'timer-dot',
                  content: '.',
                },
                {
                  tag: 'div',
                  cls: 'timer-sec',
                  content: '00',
                },
              ],
            },
          ],
        },
        {
          tag: 'div',
          cls: 'container-header-btn',
          content: [
            {
              tag: 'button',
              cls: 'start-button',
              content: 'Начать заново',
            },
          ],
        },
      ],
    },
    {
      tag: 'div',
      cls: 'container-cards',
      content: [
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/spades/ace.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/spades/king.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/spades/queen.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/spades/jack.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/spades/10.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/spades/9.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/spades/8.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/spades/7.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/spades/6.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/hearts/ace.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/hearts/king.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/hearts/queen.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/hearts/jack.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/hearts/10.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/hearts/9.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/hearts/8.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/hearts/7.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/hearts/6.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/diamonds/ace.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/diamonds/king.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/diamonds/queen.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/diamonds/jack.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/diamonds/10.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/diamonds/9.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/diamonds/8.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/diamonds/7.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/diamonds/6.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/clubs/ace.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/clubs/king.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/clubs/queen.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/clubs/jack.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/clubs/10.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/clubs/9.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/clubs/8.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/clubs/7.png`,
              },
              content: '',
            },
          ],
        },
        {
          tag: 'div',
          cls: 'card',
          content: [
            {
              tag: 'img',
              cls: 'img',
              attrs: {
                src: `./src/cards/clubs/6.png`,
              },
              content: '',
            },
          ],
        },
      ],
    },
  ],
};
