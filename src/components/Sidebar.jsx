import about from "../picture/about.jpg";
const Sidebar = ({currentTab,setCurrentTab}) => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
        style={{ width: 280 }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li onClick={()=>setCurrentTab("Clock")} className="nav-item">
            <a href="#" className={`nav-link text-white ${currentTab === "Clock" && "active"}`} aria-current="page">
              <svg className="bi pe-none me-2" width={16} height={16}>
                <use xlinkHref="#clock" />
              </svg>
              Weather
            </a>
          </li>
          <li onClick={()=>setCurrentTab("StopWatch")}>
            <a href="#" className={`nav-link text-white ${currentTab === "StopWatch" && "active"}`}>
              <svg className="bi pe-none me-2" width={16} height={16}>
                <use xlinkHref="#StopWatch" />
              </svg>
              Stop Watch
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={about}
              alt=""
              width={32}
              height={32}
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
