import { Footer } from './components/footer.js';
import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { TaskList } from './components/task.list.js';
import { tasks } from './models/data.js';

console.log('loaded index');
console.log(tasks);
new Header('body'); //si tenemos una pagina about, pegamos esta linea y asi inserta el footer sin copiar todo el codigo
new Main('body');
new TaskList('main');
new Footer('body');
