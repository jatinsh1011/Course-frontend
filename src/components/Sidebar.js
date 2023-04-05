import './Sidebar.css';
import Background from '../components/images/logo.png';


function Sidebar() {
  function handlechange(event){
   
    document.getElementById(event.target.id).classList.add("active")
     
  }
  return (
    <div className="App">
     <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse n">
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4">
      <a class="navbar-brand" href='#'><img className='logo' src={Background} alt="" /></a>
      
<button id="btn1" type="button" class="btn btn-color " onClick={ handlechange }>Course</button>
<button id= "btn2" type="button" class="btn btn-color " >Discussion</button>

      <hr className='horizontal'></hr>
      <span className='issue'>Facing Issues ?</span>
      <button className='side-help'>

                <span className='side-get'>Get Help</span>
                </button>

        
      </div>
    </div>
  </nav>
  
    </div>
  );
}


export default Sidebar;
