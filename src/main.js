import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';

const app = createElement('div', {
    attrs: {
        id: 'main',
    },
    children: [
        'image title',
        createElement('br'),
        createElement('img', {
            attrs: {
                src: 'https://placeimg.com/640/480/arch',
                title: 'image',
                width: 640,
                height: 480
            }
        })
    ]
});

const mountTarget = document.getElementById('rootApp');

const renderedApp = render(app);
mount(renderedApp, mountTarget);
