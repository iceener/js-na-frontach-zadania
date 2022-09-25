import { root } from './shop/root.component'

const $app = document.querySelector('#app')

if($app) {
    $app.append(root())
}
