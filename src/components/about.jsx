import React from 'react';
import '../asset/component/about.css';

function About() {
    const handleClick = () => {
        alert('Welcome to the application!');
    };

    return (
        <div className="about-container">
            <h1>ประวัติส่วนตัว</h1>
            <div className="personal-info-card styled-card">
                <p><strong>ชื่อ:</strong> นายขจรศักดิ์ สุขศิลา</p>
                <p><strong>เกิดวัน:</strong> พฤหัสบดีที่ 2 พฤษภาคม 2545</p>
                <p><strong>เชื้อชาติ:</strong> ไทย</p>
                <p><strong>สัญชาติ:</strong> ไทย</p>
                <p><strong>ศาสนา:</strong> พุทธ</p>
                <p><strong>ที่อยู่:</strong> บ้านเลขที่ 33/2 หมู่ 11 ต.หมอนทอง อ.บางน้ำเปรี้ยว จ.ฉะเชิงเทรา 24150</p>
                <p><strong>เบอร์โทร:</strong> 094-425-3523</p>
                <p><strong>E-mail:</strong> kajhornsak2545@gmail.com</p>
            </div>

            <h1>ประวัติการศึกษา</h1>
            <div className="education-card styled-card">
                <p><strong>ระดับอนุบาล:</strong> ปีพุทธศักราช 2549 - 2550</p>
                <p><strong>โรงเรียน:</strong> โรงเรียนวัดเกตุสโมสร จ.ฉะเชิงเทรา</p>
                <p><strong>แผนที่:</strong> <a href="https://www.google.com/maps?q=13.853121850892487,101.0924757963274" target="_blank" rel="noopener noreferrer">ดูแผนที่</a></p>
            </div>
            <div className="education-card styled-card">
                <p><strong>ระดับประถมศึกษา ต้น-ปลาย:</strong> ปีพุทธศักราช 2551 - 2556</p>
                <p><strong>โรงเรียน:</strong> โรงเรียนวัดเกตุสโมสร จ.ฉะเชิงเทรา</p>
                <p><strong>แผนที่:</strong> <a href="https://www.google.com/maps?q=13.853121850892487,101.0924757963274" target="_blank" rel="noopener noreferrer">ดูแผนที่</a></p>
            </div>
            <div className="education-card styled-card">
                <p><strong>ระดับมัธยมศึกษา ต้น-ปลาย:</strong> ปีพุทธศักราช 2557 - 2562</p>
                <p><strong>โรงเรียน:</strong> โรงเรียนวัดโสธรวรารามวรวิหาร จ.ฉะเชิงเทรา</p>
                <p><strong>แผนที่:</strong> <a href="https://www.google.com/maps?q=13.675943579949784,101.0644017530776" target="_blank" rel="noopener noreferrer">ดูแผนที่</a></p>
            </div>
            <div className="education-card styled-card">
                <p><strong>ระดับมหาวิทยาลัย:</strong> ปีพุทธศักราช 2563 - 2567</p>
                <p><strong>มหาวิทยาลัย:</strong> มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา</p>
                <p><strong>แผนที่:</strong> <a href="https://www.google.com/maps?q=13.675943579949784,101.0644017530776" target="_blank" rel="noopener noreferrer">ดูแผนที่</a></p>
            </div>

            <footer className="footer">
                <p>© 2024 Khajornsa Suksila. Computer Engineering </p>
                <div className="contact-icons">
                    <a href="https://www.facebook.com/aaon.khajornsak.7" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Facebook" className="facebook-icon"  />
                    </a>
                    {/* <a href="https://line.me/yourprofile" target="_blank" rel="noopener noreferrer">
                        <img src="path/to/line-logo.png" alt="Line" />
                    </a> */}
                    <a href="https://www.youtube.com/channel/UCkDFnlvcIB1ofHnNl6B2tUQ" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="YouTube" className="youtube-icon" />  
                    </a>
                    <strong> : Khajornsak Suksila</strong>
                </div>
            </footer>
        </div>
    );
}

export default About;

