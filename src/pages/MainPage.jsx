import React from 'react'
import logo from '../assets/logo.svg'
import firstframebg from '../assets/first_frame_bg.png'
import secondframeitem1 from '../assets/second_frame_first_item.png'
import secondframeitem2 from '../assets/second_frame_second_item.png'
import fourthframeProfileImg from '../assets/employee.png'
import fourthframeBellImg from '../assets/bell.png'
import fourthframeCalendarImg from '../assets/calendar.png'
import fourthframeCashImg from '../assets/cash.png'
import fourthframeBg from '../assets/fourth_bg.png'
import fifthframeBg from '../assets/image 36.png'
import fifthframeCheckListIcon from '../assets/image 31.png'
import sixthframeItemIcon from '../assets/image 39.png'
import seventhframeItemIcon from '../assets/Group 2.png'

function MainPage() {
    return (
        <div>
            <div className="landing_page firstframe">
                <div className="header" style={{ width: '100%', height: '116px', backgroundColor: '#53B175'}}>
                    <a href="#default" class="logo"><img src={logo} alt=""/></a>

                    <div class="header-right" style={{ float: 'right'}}>
                        <a class="active" href="#home">Home</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>
                </div>
                <div className="row">
                    <div className="w-50 first_frame_body">
                        <p className="first_frame_content" >Streamline your car wash & detailing center’s services with car wash appointment scheduling software. Enable your online users to schedule appointments for washing or cleaning cars within minutes.</p>
                        <button>GET STARTED</button>
                    </div>
                    <div className="w-50"><img src={firstframebg} alt=""/></div>
                </div>
            </div>
            <div className="landing_page secondframe">
                <div className="row secondframe_content">
                    <div className="w-50 secondframe_content_item">
                        <h1>Benefits of Auto Detailing Booking Software</h1>
                        <img src={secondframeitem1} alt=""/>
                        <p>
                        To make the car wash scheduling software more reliable, unique panels are developed for all users. Customers can choose the appointments and can pay for the bookings through online multiple payment options through the customer panel quickly. Service provider’s panel benefits to showcase and automate the complete car detailing and washing services business online viable in a single click.
                        </p>
                    </div>
                    <div className="w-50 secondframe_content_item">
                    <h1>Features of Car Wash 
Appointment Scheduling Software</h1>
                        <img src={secondframeitem2} alt=""/>
                        <p>The features of our appointment booking software have made the online car wash system robust. Ease of showing the services, booking the appointments 24/7, the option of changing the service packages, online transactions, etc are some of the major characteristics to boost productivity.</p>
                    </div>
                </div>
            </div>
            <div className="landing_page thirdframe">
                <h1>Car Detailing Customer App Panel</h1>
                <p>Enable online customers to book appointments through car detailing and washing software 24/7. The following are the features that make the online option an awesome one.</p>
            </div>
            
            <div className="landing_page fourthframe">
                <div className="row fourthframe_content">
                    <div className="w-50">
                        <div className="row fourth_content_item">
                          <img src={fourthframeProfileImg} alt=""/>
                          <div className="item_desc">
                              <h1>Profile</h1>
                              <p>To get the authentication, the customer needs to fill some of the information such as mobile number or email id.</p>
                          </div>
                        </div>
                        <div className="row fourth_content_item">
                          <img src={fourthframeBellImg} alt=""/>
                          <div className="item_desc">
                              <h1>To Book an Appointment</h1>
                              <p>Allows them to choose the services from the displayed car wash and car detailing categories.</p>
                          </div>
                        </div>
                        <div className="row fourth_content_item">
                          <img src={fourthframeCalendarImg} alt=""/>
                          <div className="item_desc">
                              <h1>Notification</h1>
                              <p>Send booking confirmations, reminders, notifications via email or text messages.</p>
                          </div>
                        </div>
                        <div className="row fourth_content_item">
                          <img src={fourthframeCashImg} alt=""/>
                          <div className="item_desc">
                              <h1>Multiple Online Payment Options</h1>
                              <p>Send booking confirmations, reminders, notifications via email or text messages.</p>
                          </div>
                        </div>
                    </div>
                    <div className="w-50">
                        <img src={fourthframeBg} alt=""/>
                    </div>
                </div>
            </div>
            <div className="landing_page thirdframe">
                <h1>Car Detailing Service Provider’s App Panel</h1>
            </div>
            <div className="landing_page fourthframe">
                <div className="row fourthframe_content">
                    
                    <div className="w-50">
                        <img src={fifthframeBg} alt=""/>
                    </div>
                    <div className="w-50">
                        <div className="row fourth_content_item">
                          <img src={fifthframeCheckListIcon} alt=""/>
                          <div className="item_desc">
                              <h1>Display all the Services</h1>
                              <p>Enables the owners to display a list of services online in different categories.</p>
                          </div>
                        </div>
                        <div className="row fourth_content_item">
                          <img src={fourthframeBellImg} alt=""/>
                          <div className="item_desc">
                              <h1>Accept Appointments</h1>
                              <p>As per the availability of experts, car wash center owners can accept or reject the bookings using our appointment scheduling software.</p>
                          </div>
                        </div>
                        <div className="row fourth_content_item">
                          <img src={fourthframeCalendarImg} alt=""/>
                          <div className="item_desc">
                              <h1>Send notifications</h1>
                              <p>It's a kind of alert message about the confirmation of bookings to clients through text and email.</p>
                          </div>
                        </div>
                        <div className="row fourth_content_item">
                          <img src={fourthframeCashImg} alt=""/>
                          <div className="item_desc">
                              <h1>Online Payments</h1>
                              <p>Accept payments for booked appointment services through multiple online modes.</p>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="landing_page fifth">
                <h1>Our customers love our product</h1>
            </div>
            <div className="landing_page sixthframe">
                <div className="row">
                    <div className="w-33 left_border">
                        <div className="head d-flex">
                            <img src={sixthframeItemIcon} alt=""/>
                            <p>They have a quick solition to every issue that arises even white operating it. My customers are loving it.</p>
                        </div>
                        <p>N K Sergei</p>
                        <p>Nursultan , Kazakhstan</p>
                    </div>
                    <div className="w-33 left_border">
                        <div className="head d-flex">
                            <img src={sixthframeItemIcon} alt=""/>
                            <p>The best online appointment booking system . Worked as a jumpstart for my car 
wash business</p>
                        </div>
                        <p>Bakytzhan </p>
                        <p>Almaty , Kazakhstan</p>
                    </div>
                    <div className="w-33 left_border">
                        <div className="head d-flex">
                            <img src={sixthframeItemIcon} alt=""/>
                            <p>What l like about this software is its features and the team is too experienced and guided you well.</p>
                        </div>
                        <p>Aleksander </p>
                        <p>Kokshetau , Kazakhstan</p>
                    </div>
                </div>
            </div>
            <div className="landing_page seventhframe">
                <div className="row">
                    <div className="w-50">
                        <img src={seventhframeItemIcon} alt=""/>
                    </div>
                    <div className="w-50">
                        <h1>Leave a review about our work</h1>
                        <div className="inputForm d-flex">
                            <p>Name</p>
                            <input name="firstname" type="text"/>
                        </div>
                        <div className="inputForm d-flex">
                            <p>Email</p>
                            <input name="email" type="text"/>
                        </div>
                        <div className="inputForm d-flex">
                            <p>Message</p>
                            <input name="message" type="text"/>
                        </div>
                        <div className="submit">
                            
                        <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="items">
                    <a href="">CAR WASH</a>
                    <a href="">FOR CAR OWNERS</a>
                    <a href="">CONTACTS</a>
                </div>
            </div>
        </div>
    )
}

export default MainPage
