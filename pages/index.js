import Layout from '../components/Layout.js';
import indexStyles from './index.scss';

export default () => {
  const foo_this_is_mine = () => { var x = 1; }
  const bar_this_is_mine = () => { var x = f(); }
  
  const baz_this_is_mine = () => {
    console.log('ciao');
    
    var x = 1;
    console.log(x);
    const unused = () => {
      return 5;
    }
  }
  
  return (
    <Layout>
      <h1 className="o-h1">Nextjs with SCSS</h1>
      <a onClick={baz_this_is_mine} className="button is-primary">button test</a>
      <style jsx>{indexStyles}</style>
    </Layout>
  )
}
