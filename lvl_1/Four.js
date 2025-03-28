import loc from './assets/ex.jpg';

function Four() {
  return (    
    <div>
        <h3>Image rendering in React</h3>
        <img src={loc} alt='local pic' width="300" />
    </div>
  )
}

export default Four