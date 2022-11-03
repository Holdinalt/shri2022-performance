(() => {
    function bind(nodes, event, handler) {
        Array.from(nodes).forEach(node => {
            node.addEventListener(event, handler);
        });
    }

    function makeTabs(node) {
        let selected = node.querySelector('.section__tab_active').dataset.id; // string

        const tabs = node.querySelectorAll('.section__tab'); // [node, node]
        const list = Array.from(tabs).map(node => node.dataset.id); // [string, string]

        const panels = node.querySelectorAll('.section__panel'); // [node, node]

        const select = node.querySelector('.section__select'); // node

        let oldTab = node.querySelector('.section__tab_active');
        let oldPanel = node.querySelector('.section__panel:not(.section__panel_hidden)');

        function selectTab(newId) {
            let tabIndex = list.findIndex(elem => elem === newId)

            // gh pages работай!!

            const newTab = tabs[tabIndex];
            const newPanel = panels[tabIndex] // может сломать отображение

            selected = newId;

            oldTab.classList.remove('section__tab_active');
            oldTab.setAttribute('aria-selected', 'false');
            oldTab.removeAttribute('tabindex');
            newTab.classList.add('section__tab_active');
            newTab.setAttribute('aria-selected', 'true');
            newTab.setAttribute('tabindex', '0');
            newTab.focus({
                preventScroll: true
            });

            oldPanel.classList.add('section__panel_hidden');
            oldPanel.setAttribute('aria-hidden', 'true');
            newPanel.classList.remove('section__panel_hidden');
            newPanel.setAttribute('aria-hidden', 'false');

            oldTab = newTab
            oldPanel = newPanel

            select.value = newId;
        }

        select.addEventListener('input', () => {
            selectTab(select.value);
        });

        bind(tabs, 'click', event => {
            const newId = event.target.dataset.id;
            selectTab(newId);
        });

        bind(tabs, 'keydown', event => {
            if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
                return;
            }

            let index = list.indexOf(selected);

            switch (event.which) {
                case 37: --index; break
                case 39: ++index; break
                case 36: index = 0; break
                case 35: index = list.length - 1; break
                default: return;
            }

            if (index >= list.length) {
                selectTab(list[0]);
            } else if (index < 0) {
                selectTab(list.at(-1));
            }

            event.preventDefault();
        });
    }

    function makeMenu(node) {
        let expanded = false;
        const links = document.querySelector('.header__links');
        const headerMenuTextNode = node.querySelector('.header__menu-text');

        node.addEventListener('click', () => {
            expanded = !expanded;
            node.setAttribute('aria-expanded', expanded ? 'true' : 'false');
            headerMenuTextNode.textContent = expanded ? 'Закрыть меню' : 'Открыть меню';
            links.classList.toggle('header__links_opened', expanded);
            links.classList.add('header__links-toggled');
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        Array.from(document.querySelectorAll('.main__devices')).forEach(makeTabs);
        Array.from(document.querySelectorAll('.header__menu')).forEach(makeMenu);
    });
})();
