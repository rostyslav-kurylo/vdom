import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';

let currentTime = '';
const mountTarget = document.getElementById('rootApp');
let app = createElement('div');

const updateTime = () => {
    currentTime = new Date().toLocaleTimeString();
};

setInterval(() => {
    updateTime();
    app = createElement('div', {
        attrs: {
            id: 'main',
        },
        children: [
            createElement('div', {
                attrs: {
                    class: 'clock-fixed'
                },
                children: [currentTime]
            })
        ]
    });

    mount(render(app), mountTarget);
}, 1000);

