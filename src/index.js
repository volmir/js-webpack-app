import css from './styles/style.css';
import Learn from './learn';

let learn = new Learn();
console.log(learn.a);
console.log(learn['true']);
console.log(Learn.getName());
learn.setName('Петр');
console.log(learn.getName());
console.log(Learn.getName());


