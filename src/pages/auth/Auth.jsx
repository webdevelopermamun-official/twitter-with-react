import "./Auth.scss"
import logo from "../../assets/images/logo.png"
import ModalPopup from "../../component/modalPopup/modalPopup"
import { useState } from "react"

const Auth = () => {
  const [createAccountClose, setCreateAccountClose] = useState(false)
  const [loginAccount, setLoginAccount] = useState(false)
  return (
    <>
      {
        createAccountClose &&
        <ModalPopup hideModal = {setCreateAccountClose} title="Step 1 of 5" >
          <div className="user_sign_up">
              <h2>Create your account</h2>
              <form action="#">
              <div className="input_box">
                  <input type="text" required />
                  <label>Name</label>
              </div>
              <div className="input_box">
                  <input type="Email" required />
                  <label>Email</label>
              </div>
              <div className="filed_change">
                  <a href="">Use phone instead</a>
              </div>
              <div className="date_of_birth">
                  <h4>Date of birth</h4>
                  <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                  <div className="select_date_of_birth">
                  <div className="select_box month">
                      <label htmlFor="month">Month</label>
                      <select name="" id="month">
                      <option value=""></option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                      </select>
                  </div>

                  <div className="select_box day">
                      <label htmlFor="day">Day</label>
                      <select name="" id="day">
                      <option value=""></option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                      <option value="06">06</option>
                      <option value="07">07</option>
                      <option value="08">08</option>
                      <option value="09">09</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                      </select>
                  </div>

                  <div className="select_box year">
                      <label htmlFor="year">Year</label>
                      <select name="" id="">
                      <option value=""></option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                      <option value="2009">2009</option>
                      <option value="2008">2008</option>
                      <option value="2007">2007</option>
                      <option value="2006">2006</option>
                      <option value="2005">2005</option>
                      <option value="2004">2004</option>
                      <option value="2003">2003</option>
                      <option value="2002">2002</option>
                      <option value="2001">2001</option>
                      <option value="2000">2000</option>
                      <option value="1999">1999</option>
                      <option value="1998">1998</option>
                      <option value="1997">1997</option>
                      <option value="1996">1996</option>
                      <option value="1995">1995</option>
                      <option value="1994">1994</option>
                      <option value="1993">1993</option>
                      <option value="1992">1992</option>
                      <option value="1991">1991</option>
                      <option value="1990">1990</option>
                      </select>
                  </div>
                  </div>
              </div>
              <button type="submit">Next</button>
              </form>
          </div>
        </ModalPopup>
      }
      {
        loginAccount &&
        <ModalPopup hideModal = {setLoginAccount} logo={logo}>
          <section className="auth_section_area">
            <div className="model_signin_popup">
              <div className="auth_login-content">
                <div className="auth_signup_area">
                  <div className="sugnup_buttons">
                    <h2>Sign in to X</h2> 
                    <div className="login_google">
                      <a href="">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" ><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                        <span>Sign up with Google</span>
                      </a>
                    </div>
                    <div className="login_apple">
                      <a href="">
                        <svg viewBox="0 0 24 24" aria-hidden="true"  style= {{color: "rgb(15, 20, 25)"}}><g><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path></g></svg>
                        <span>Sign up with Apple</span>
                      </a>
                    </div>
                    <div className="auth_divider">
                      <span>or</span>
                    </div>
                    <div className="creact_account">
                      <form action="">
                        <div className="input_box">
                          <input type="Email" required />
                          <label>Phone, Email or Username</label>
                        </div>
                        <button type="submit">Next</button>
                      </form>
                    </div>
                    <div className="alrady_sign_up">
                      <button>Forgot password?</button>
                    </div>
                    <div className="create_new_account_item">
                      <p>{`Don't have an account?`} <a href="">Sign up</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </ModalPopup>
      }




      <section className="auth_section_area">
        <div className="auth_container">
          <div className="auth_login-content">
            <div className="site_logo_area">
              <a href="">
               <img src={logo} alt="" />
              </a>
            </div>
            <div className="auth_signup_area">
              <h1>Happening now</h1>
              <h4>Join today.</h4>
              <div className="sugnup_buttons">
                <div className="login_google">
                  <a href="">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" ><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                    <span>Sign up with Google</span>
                  </a>
                </div>
                <div className="login_apple">
                  <a href="">
                    <svg viewBox="0 0 24 24" aria-hidden="true"  style= {{color: "rgb(15, 20, 25)"}}><g><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path></g></svg>
                    <span>Sign up with Apple</span>
                  </a>
                </div>
                <div className="auth_divider">
                  <span>or</span>
                </div>
                <div className="creact_account">
                  <button onClick={() => setCreateAccountClose(true)}>Create account</button>
                  <p>By signing up, you agree to the <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>, including Cookie Use.</p>
                </div>
                <div className="alrady_sign_up">
                  <h3>Already have an account?</h3>
                  <button onClick={() => setLoginAccount(true)}>Sign in</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="auth_footer">
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Download the X app</a></li>
          <li><a href="">Help Center</a></li>
          <li><a href="">Terms of Service</a></li>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Cookie Policy</a></li>
          <li><a href="">Accessibility</a></li>
          <li><a href="">Ads info</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">Status</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="">Brand Resources</a></li>
          <li><a href="">Advertising</a></li>
          <li><a href="">Marketing</a></li>
          <li><a href="">X for Business</a></li>
          <li><a href="">Developers</a></li>
          <li><a href="">Directory</a></li>
          <li><a href="">Settings</a></li>
          <li>© 2023 X Corp.</li>
        </ul>
      </section>
    </>
  )
}

export default Auth









