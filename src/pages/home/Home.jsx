import Swal from "sweetalert2";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { LuSettings } from "react-icons/lu";

import "./Home.scss"
import { useContext, useState } from "react";
import { getLocalStorage, setLocalStorage, setLsDarkModeData } from "../../helper/SendDataLs";
import { Post } from "../../component/Post/Post";
import IsDarkModeContext from "../../context/IsDarkModeContext";


const Home = () => {
  const {isDarkMode, setIsDarkMode} = useContext(IsDarkModeContext);

  const [postForm, setPostForm] = useState({
    postData: "",
    postPhoto: ""
  });

  const handleInputValue = (e) => {
    setPostForm ((prevState) => (
      {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    ));    
  }     

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(!postForm.postData && !postForm.postPhoto){
      Swal.fire({
        title: "You must fill in one of the fields",
        icon: "error"
      });
    }else{ 

      setLocalStorage("userPost", postForm)
      

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "New Post Updated",
        showConfirmButton: false,
        timer: 1500
      });

      setPostForm({
        postData: "",
        postPhoto: ""
      })
    }
  }


  const haldleDarkMode = () => {

    if(isDarkMode == false){
      setIsDarkMode(true)
      setLsDarkModeData("inDarkMode", isDarkMode)
    }else{
      setIsDarkMode(false)
      setLsDarkModeData("inDarkMode", isDarkMode)
    }

  }
// get all data usage:
const userData = getLocalStorage('userPost');
  return (
    <>

      <div className="dar_mode_toggole">
          <input checked={isDarkMode} onClick={haldleDarkMode} className="checkbox" type="checkbox" />
      </div>
      <section className="twitter_home_body_section">
        <div className="container">
          <div className="home_body_areya_item">
            <div className="home_left_body">
              <div className="left_side_bar">
                <div className="logo_area">
                  <a href="">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                  </a>
                </div>       
                <div className="menu_items">
                  <ul>
                    <li><a href="">
                      <span><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"></path></g></svg></span>
                      <span>Home</span>
                    </a></li>
                    <li><a href="">
                      <span><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg></span>
                      <span>Explore</span>
                    </a></li>
                    <li><a href="">
                      <span><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"></path></g></svg></span>
                      <span>Notifications</span>
                    </a></li>
                    <li><a href="">
                      <span><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-15c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v2.764l8 3.638 8-3.636V5.5c0-.276-.224-.5-.5-.5h-15zm15.5 5.463l-8 3.636-8-3.638V18.5c0 .276.224.5.5.5h15c.276 0 .5-.224.5-.5v-8.037z"></path></g></svg></span>
                      <span>Messages</span>
                    </a></li>
                    <li><a href="">
                      <span><svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM16 10H8V8h8v2zm-8 2h8v2H8v-2z"></path></g></svg></span>
                      <span>Lists</span>
                    </a></li>
                    <li><a href="">
                      <span><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm15.998.056L23.528 21H9.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977s6.816 2.358 7 8.977zM21.437 19c-.367-3.781-2.17-6.004-4.938-6.004s-4.57 2.223-4.938 6.004h9.875zm-4.938-9c-.799 0-1.527-.279-2.116-.73-.836-.64-1.384-1.638-1.384-2.77 0-1.93 1.567-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zm-1.5-3.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5zM7.5 3C9.433 3 11 4.57 11 6.5S9.433 10 7.5 10 4 8.43 4 6.5 5.567 3 7.5 3zm0 2C6.673 5 6 5.673 6 6.5S6.673 8 7.5 8 9 7.327 9 6.5 8.327 5 7.5 5z"></path></g></svg></span>
                      <span>Communities</span>
                    </a></li>
                    <li><a href="">
                      <span><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg></span>
                      <span>Premium</span>
                    </a></li>
                    <li><a href="">
                      <span><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path></g></svg></span>
                      <span>Profile</span>
                    </a></li>
                    <li><a href="">
                      <span><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"></path></g></svg></span>
                      <span>More</span>
                    </a></li>
                  </ul>

                  <div className="post_btn">
                    <button>Post</button>
                  </div>
                  <div className="view_profile_single">
                    <div className="user_photo">
                      <img src="https://pbs.twimg.com/profile_images/1651189192154836992/FOORf7kH_normal.jpg" alt="" />
                    </div>
                    <div className="auth_user_info">
                      <span>Mamun Mirdha</span>
                      <a href="">@developermamun_</a>
                    </div>
                    <div className="view_more">
                        <span><HiOutlineDotsHorizontal /></span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="home_middle_body">
              <div className="home_header_area">
                <ul>
                  <li><a className="active" href="">For you</a></li>
                  <li><a href="">Following</a></li>
                  <li><a href="">ML List</a></li>
                  <li><a href="">Business, Banking and Economy</a></li>
                </ul>
                <div className="slider_items_setting">
                  <span><LuSettings /></span>
                </div>
                <div className="arrow_slider">
                  <span aria-label="Timeline settings"><FaArrowRight /></span>
                </div>
              </div>
              <div className="create_post_area">
                <div className="post_auth_img">
                  <img src="https://pbs.twimg.com/profile_images/1651189192154836992/FOORf7kH_normal.jpg" alt="" />
                </div>
                <div className="complete_post_area">
                  <form onSubmit={handleOnSubmit}>
                    <textarea value={postForm.postData} onChange = {handleInputValue} placeholder="What is happening?!" name="postData"></textarea>
                    <input placeholder="Images Url" type="url" name="postPhoto" value={postForm.postPhoto} onChange = {handleInputValue} />
                    <div className="post_future_items">
                      <div className="future_item_list">
                        <ul>
                          <li><a href="">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path></g></svg>
                          </a></li>
                          <li><a href="">
                            <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path></g></svg>
                          </a></li>
                          <li><a href="">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"></path></g></svg>
                          </a></li>
                          <li><a href="">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path></g></svg>
                          </a></li>
                          <li><a href="">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"></path></g></svg>
                          </a></li>
                          <li><a href="">
                            <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path></g></svg>
                          </a></li>
                        </ul>
                      </div>
                      <div className="bubmit_button">
                        <button type="submit">Post</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="show_latest_post">
                <a href="">Show 70 posts</a>
              </div>

              {
                userData && userData.length > 0 ? ( userData.reverse().map((postData, item) => (
                  <Post key={item} postContent={postData.postData} postImage={postData.postPhoto} />))
                  ) : (
                      <p className="no_post">No data available</p>
                    )   
              }
              
            </div>
            <div className="home_right_body">
              <div className="search_bar_area">
                <form action="">
                  <span>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
                  </span>
                  <input type="search" name="" id="" placeholder="Search..." />
                </form>
              </div>
              <div className="subscribe">
                <h3>Subscribe to Premium</h3>
                <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                <button>Subscribe </button>
              </div>
              <div className="trends">
                <h3>Trends for you</h3>
                <div className="trend_list">
                  <div className="trend_box">
                    <a href="">
                      <p>Video games · Trending</p>
                      <b>GTA 6</b>
                      <span>2,175 posts</span>
                    </a>
                    <span className="trend_more"><HiOutlineDotsHorizontal /></span>
                  </div>                  
                  <div className="trend_box">
                    <a href="">
                      <p>Politics · Trending</p>
                      <b>Nazis</b>
                      <span>2,175 posts</span>
                    </a>
                    <span className="trend_more"><HiOutlineDotsHorizontal /></span>
                  </div>                  
                  <div className="trend_box">
                    <a href="">
                      <p>Politics · Trending</p>
                      <b>#BreakingNews</b>
                      <span>66.3K posts</span>
                    </a>
                    <span className="trend_more"><HiOutlineDotsHorizontal /></span>
                  </div>                  
                  <div className="trend_box">
                    <a href="">
                      <p>Video games · Trending</p>
                      <b>GTA 6</b>
                      <span>2,175 posts</span>
                    </a>
                    <span className="trend_more"><HiOutlineDotsHorizontal /></span>
                  </div>                  
                  <div className="trend_box">
                    <a href="">
                      <p>Video games · Trending</p>
                      <b>GTA 6</b>
                      <span>2,175 posts</span>
                    </a>
                    <span className="trend_more"><HiOutlineDotsHorizontal /></span>
                  </div>                  
                  <div className="trend_box">
                    <a href="">
                      <p>Video games · Trending</p>
                      <b>GTA 6</b>
                      <span>2,175 posts</span>
                    </a>
                    <span className="trend_more"><HiOutlineDotsHorizontal /></span>
                  </div>                  
                  <div className="trend_box">
                    <a href="">
                      <p>Video games · Trending</p>
                      <b>GTA 6</b>
                      <span>2,175 posts</span>
                    </a>
                    <span className="trend_more"><HiOutlineDotsHorizontal /></span>
                  </div>                  
                  <div className="trend_box">
                    <a href="">
                      <p>Video games · Trending</p>
                      <b>GTA 6</b>
                      <span>2,175 posts</span>
                    </a>
                    <span className="trend_more"><HiOutlineDotsHorizontal /></span>
                  </div>                  
                  <div className="trend_box">
                    <a href="">
                      <p>Video games · Trending</p>
                      <b>GTA 6</b>
                      <span>2,175 posts</span>
                    </a>
                    <span className="trend_more"><HiOutlineDotsHorizontal /></span>
                  </div>                  
                  <div className="trend_box">
                    <a href="">
                      <p>Video games · Trending</p>
                      <b>GTA 6</b>
                      <span>2,175 posts</span>
                    </a>
                    <span className="trend_more"><HiOutlineDotsHorizontal /></span>
                  </div>                 
                  <div className="trend_box">
                    <a className="see_more" href="">Show more</a>
                  </div>
                </div>
              </div>
              <div className="who_to_follow">
                <h3>Who to follow</h3>
                <div className="whofollow_container">
                  <div className="whofollow_box">
                    <div className="whofollow_user">
                      <a href="">
                        <div className="whofollow_image">
                          <img src="https://pbs.twimg.com/profile_images/1727125748128100352/ZVmqwfkc_normal.jpg" alt="" />
                        </div>
                        <div className="whofollow_name">
                          <p>Ethan.A</p>
                          <small>@ethan.a</small>
                        </div>
                      </a>
                    </div>
                    <div className="whofollow_btn">
                      <button>Follow</button>
                    </div>
                  </div>                  
                  <div className="whofollow_box">
                    <div className="whofollow_user">
                      <a href="">
                        <div className="whofollow_image">
                          <img src="https://pbs.twimg.com/profile_images/1727125748128100352/ZVmqwfkc_normal.jpg" alt="" />
                        </div>
                        <div className="whofollow_name">
                          <p>Ethan.A</p>
                          <small>@ethan.a</small>
                        </div>
                      </a>
                    </div>
                    <div className="whofollow_btn">
                      <button>Follow</button>
                    </div>
                  </div>                  
                  <div className="whofollow_box">
                    <div className="whofollow_user">
                      <a href="">
                        <div className="whofollow_image">
                          <img src="https://pbs.twimg.com/profile_images/1727125748128100352/ZVmqwfkc_normal.jpg" alt="" />
                        </div>
                        <div className="whofollow_name">
                          <p>Ethan.A</p>
                          <small>@ethan.a</small>
                        </div>
                      </a>
                    </div>
                    <div className="whofollow_btn">
                      <button>Follow</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right_footer_content">
                <ul>
                  <li><a href="">Terms of Service</a></li>
                  <li><a href="">Privacy Policy</a></li>
                  <li><a href="">Cookie Policy</a></li>
                  <li><a href="">Accessibility</a></li>
                  <li><a href="">Ads info</a></li>
                  <li><a href="">More</a></li>
                  <li>© 2023 X Corp.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>    
    </>
  )
  
}

export default Home