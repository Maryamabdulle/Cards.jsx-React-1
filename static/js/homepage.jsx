'use strict';

function Homepage() {
  return <div>
    <h1>Hello, user, welcome!</h1>
    <a href='/cards'>Look at these cards!</a> <br/>
    <img src='/static/img/balloonicorn.jpg'></img>
  </div>;
}
ReactDOM.render(<Homepage />, document.querySelector('#app'));
