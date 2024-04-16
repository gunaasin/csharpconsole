import {Link} from "react-router-dom";


export const Navbar = () => {
  
  return (
    <div className="nav-component">
 <div className="logoimg"><img src="codelogo.png" alt="" /></div>
        
     <h3 className="nav-Link"> <Link to={"/"}>Asynchronous Programming</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component2"}>Exception Handling</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component3"}>Concurrency </Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component4"}>Reflection and Attribute</Link></h3>
     <h3 className="nav-Link"> <Link to={"/Component5"}> Unsafe Code</Link></h3>
     {/* <h3 className="nav-Link"> <Link to={"/Component6"}> Memory Management</Link></h3> */}
     <h3 className="nav-Link"> <Link to={"/Component7"}>  Value Types vs Reference Types</Link></h3>
     {/* <h3 className="nav-Link"> <Link to={"/Component8"}> </Link></h3> */}
     {/* <h3 className="nav-Link"> <Link to={"/Component9"}> Error Handling</Link></h3> */}
     {/* <h3 className="nav-Link"> <Link to={"/Component10"}> </Link></h3> */}
  
    </div>
  )
}
