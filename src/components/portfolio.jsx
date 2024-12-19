import React, { useState } from 'react';
import '../asset/component/portfolio.css';
import image from '../asset/images/image.png'
import image1 from '../asset/images/image1.png'
import image2 from '../asset/images/image2.png'
import image3 from '../asset/images/image3.png'

import council_1 from '../asset/images/council_1.png';
import council_2 from '../asset/images/council_2.png';
import council_3 from '../asset/images/council_3.png';

import TG_1 from '../asset/images/TG_1.png';
import TG_2 from '../asset/images/TG_2.png';
import TG_3 from '../asset/images/TG_3.png';

import MV_1 from '../asset/images/MV_1.png';

function Portfolio() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        image1,
        image2,
        image3,
        image
    ];
    const TG_images = [
        TG_1,
        TG_2,
        TG_3,
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    return (
        <div className="portfolio-container">
            <h1>ผลงาน</h1>
            <div className="education-card styled-card">
                <p><strong>ระดับมัธยม:</strong> ต้น - ปลาย</p>
                <p><strong>โครงการ:</strong> ได้เข้าร่วมโครงการ THAILAND GreenMech Contest 2019</p>
                <p><strong>จัดโดย:</strong> มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ ร่วมกับ บริษัท ภาดา เอ็ดดูเคชั่น จำกัด</p>
                <p><strong>วัตถุประสงค์:</strong> เพื่อคัดเลือกตัวแทนประเทศไทยไปแข่งขัน “2019 Green Mech World and Taiwan Contests” ระดับนานาชาติ ณ เมืองไทยจง ประเทศไต้หวัน</p>
                <p><strong>วันแข่งขัน:</strong> วันเสาร์ที่ 15 มิถุนายน 2562 ณ ศูนย์การ้าเซ็นทรัลพลาซา เวสต์เกต อำเภอบางใหญ่ จังหวัดนนบุรี</p>
                <p><strong>ผลการแข่งขัน:</strong> อยู่ใน Top 40</p>
                <p><strong>ข่าวสด:</strong> <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.khaosod.co.th%2Fpr-news%2Fnews_2625720&sa=D" target="_blank" rel="noopener noreferrer">คลิก</a></p>
                <p><strong>ภาพที่:</strong> {currentIndex + 1}/{images.length}</p>
                <div className="slideshow-container">
                    <img src={images[currentIndex]} alt="Slideshow" className="slideshow-image" />
                </div>
            </div>

            <div className="education-card styled-card">
                <p><strong>ระดับมหาวิทยาลัย:</strong> เป็นสมาชิกสภาผู้แทนนิสิต องค์การนิสิต มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา ในปี พ.ศ. 2564</p>
                <p><strong>ตำแหน่ง:</strong> ฝ่ายภาพลักษณ์และสื่อสารองค์กร</p>
                <p><strong>ตามข้อบังคับมหาวิทยาลัยเกษตรศาสตร์:</strong> ว่าด้วยธรรมนูญนิสิตมหาวิทยาลัยเกษตรศาสตร์ หมวด 1 บททั่วไป ข้อ 5 สภาผู้แทนนิสิต หมายความว่า หน่วยงานนิสิตซึ่งทำหน้าที่ในการกำกับดูแลและตรวจสอบการดำเนินงานขององค์การบริหารและองค์กรกิจกรรมนิสิตในแต่ละวิทยาเขต</p>
                <div className="slideshow-container">
                    <img src={council_1} alt="Slideshow" className="slideshow-image" /> {/* แสดง councilImage เท่านั้น */}
                </div>
            </div>

            <div className="education-card styled-card">
                <p><strong>ระดับมหาวิทยาลัย:</strong> เป็นสมาชิกสภาผู้แทนนิสิต องค์การนิสิต มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา ในปี พ.ศ. 2565</p> {/* Updated year */}
                <p><strong>ตำแหน่ง:</strong> รองประธานสภาผู้แทนนิสิต องค์การนิสิต</p> {/* Updated position */}
                <p><strong>ตามข้อบังคับมหาวิทยาลัยเกษตรศาสตร์:</strong> ว่าด้วยธรรมนูญนิสิตมหาวิทยาลัยเกษตรศาสตร์ หมวด 1 บททั่วไป ข้อ 5 สภาผู้แทนนิสิต หมายความว่า หน่วยงานนิสิตซึ่งทำหน้าที่ในการกำกับดูแลและตรวจสอบการดำเนินงานขององค์การบริหารและองค์กรกิจกรรมนิสิตในแต่ละวิทยาเขต</p>
                <div className="slideshow-container">
                    <img src={council_2} alt="Slideshow" className="slideshow-image" /> {/* แสดง councilImage เท่านั้น */}
                </div>
            </div>

            <div className="education-card styled-card">
                <p><strong>ระดับมหาวิทยาลัย:</strong> เป็นสมาชิกสภาผู้แทนนิสิต องค์การนิสิต มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา ในปี พ.ศ. 2566</p> {/* Updated year */}
                <p><strong>ตำแหน่ง:</strong> ประธานสภาผู้แทนนิสิต องค์การนิสิต</p> {/* Updated position */}
                <p><strong>ตามข้อบังคับมหาวิทยาลัยเกษตรศาสตร์:</strong> ว่าด้วยธรรมนูญนิสิตมหาวิทยาลัยเกษตรศาสตร์ หมวด 1 บททั่วไป ข้อ 5 สภาผู้แทนนิสิต หมายความว่า หน่วยงานนิสิตซึ่งทำหน้าที่ในการกำกับดูแลและตรวจสอบการดำเนินงานขององค์การบริหารและองค์กรกิจกรรมนิสิตในแต่ละวิทยาเขต</p>
                <p><strong>การได้มาซึ่งตำแหน่ง:</strong> ประธานสภาผู้แทนนิสิต องค์การนิสิต ได้มาจากการคัดเลือกโดยตรงจากสมาชิกสภาผู้แทนนิสิตศรีราชา และจะต้องผ่านการเป็นสมาชิกสภาผู้แทนนิสิต ศรีราชา อย่างน้อย 1 ปี ส่วนตำแหน่งอื่นๆ ของคณะกรรมการสภาผู้แทนนิสิตศรีราชาได้มาจากการเสนอชื่อสมาชิกสภาผู้แทนนิสิตศรีราชาของประธานสภาผู้แทนนิสิตศรีราชาและได้รับความเห็นชอบจากสมาชิกผู้แทนนิสิตศรีราชา</p>
                <p><strong>บทบาทและหน้าที่:</strong></p>
                <ol>
                    <li>ควบคุมและดำเนินกิจกรรมของสภาผู้แทนนิสิตศรีราชา</li>
                    <li>เป็นประธานของที่ประชุมในการประชุมสภาผู้แทนนิสิต การประชุมคณะกรรมการสภาผู้แทนนิสิต การประชุมนิสิตทั้งปวง การแสดงประชามติ และการร่วมประชุมระหว่างสภาผู้แทนนิสิตศรีราชากับองค์การบริหารศรีราชา</li>
                    <li>เป็นผู้แทนของสภาผู้แทนนิสิตในกิจการภายนอก</li>
                    <li>รักษาความสงบเรียบร้อยในสภาผู้แทนนิสิตศรีราชา</li>
                    <li>รักษาให้เป็นไปตามระเบียบนี้ หรือที่สภาผู้แทนนิสิตศรีราชามอบหมาย</li>
                </ol>
                <div className="slideshow-container">
                    <img src={council_3} alt="Slideshow" className="slideshow-image" /> {/* แสดง councilImage เท่านั้น */}
                </div>
            </div>

            <div className="education-card styled-card">
                <p><strong>ระดับมหาวิทยาลัย:</strong> เป็นสมาชิกสภาผู้แทนนิสิต องค์การนิสิต มหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชา ในปี พ.ศ. 2565</p> {/* Updated year */}
                <p><strong>ตำแหน่ง:</strong> รองประธานสภาผู้แทนนิสิต องค์การนิสิต</p> {/* Updated position */}
                <p><strong>เข้าร่วมการแข่งขัน:</strong> TESA Top Gun Rally#16 2022 (The Best of the best on Embedded System Developers)</p> {/* New content */}
                <p><strong>ประกาศผลการแข่งขัน:</strong> TESA Top Gun Rally#16 2022 (The Best of the best on Embedded System Developers) จัดโดย สมาคมสมองกลฝังตัวไทย (TESA) คณะเทคโนโลยีดิจิทัล สถาบันเทคโนโลยีจิตรลดา (CDTI) และเครือข่ายภาคอุตสาหกรรม</p> {/* New content */}
                <p>คณะวิศวกรรมศาสตร์ ศรีราชา ขอแสดงความยินดีกับน้องๆ ทีม Teardown และ ทีม Skythe ในโอกาสได้รับรางวัลเหรียญทองและเหรียญเงิน จากการแข่งขัน TESA Top Gun Rally#16 2022 เมื่อวันที่ 5-10 กันยายน ที่ผ่านมา โดยมี อ.จิรวัฒน์ จิตประสูตวิทย์ เป็นอาจารย์ที่ปรึกษาของทั้ง 2 ทีม</p> {/* New content */}
                <p><strong>ทีม Teardown รางวัลเหรียญทอง:</strong></p> {/* New content */}
                <ol>
                    <li>นายธฤตวัน วงศ์หล่อ</li> {/* New content */}
                    <li>นายขจรศักดิ์ สุขศิลา</li> {/* New content */}
                    <li>นายวีรเทพ รัตนจรัสกุล</li> {/* New content */}
                    <li>นางสาวณัฐนันท์ มูลทรัพย์</li> {/* New content */}
                    <li>นายธนาคม วรธันยธรณ์</li> {/* New content */}
                </ol> {/* New content */}
                <p>นิสิตชั้นปีที่ 3 สาขาวิชาวิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์</p> {/* New content */}
                <p><strong>ทีม Skythe รางวัลเหรียญเงิน:</strong></p> {/* New content */}
                <ol>
                    <li>นายธนพล ชาวคูเวียง ชั้นปีที่ 3 สาขาวิชาวิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์</li> {/* New content */}
                    <li>นางสาวปิยนุช ทองเอียด ชั้นปีที่ 3 สาขาวิชาวิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์</li> {/* New content */}
                    <li>นายศศิกะ ธานี ชั้นปีที่ 3 สาขาวิชาวิศวกรรมคอมพิวเตอร์และสารสนเทศศาสตร์</li> {/* New content */}
                    <li>นายชยากร ปัญญาโรจน์ ชั้นปีที่ 3 สาขาวิชาวิศวกรรมหุ่นยนต์และระบบอัตโนมัติ (นานาชาติ)</li> {/* New content */}
                    <li>นางสาวอทิตา พฤกษะศรี ชั้นปีที่ 3 สาขาวิชาวิศวกรรมหุ่นยนต์และระบบอัตโนมัติ (นานาชาติ)</li> {/* New content */}
                </ol> {/* New content */}
                <p>โดยทีม Teardown ยังติดลำดับ Overall Score TOP10 ของการแข่งขันครั้งนี้ จากทีมที่เข้าร่วมแข่งขันทั้งสิ้น 47 ทีม</p> {/* New content */}
                <div className="slideshow-container">
                    <div className="image-row">
                        <img src={TG_1} alt="TG Image 1" className="slideshow-image small-image" /> {/* ปรับขนาดเล็กลง */}
                    </div>
                    <div className="image-row stacked-images">
                        <img src={TG_2} alt="TG Image 2" className="slideshow-image small-image" />
                        <img src={TG_3} alt="TG Image 3" className="slideshow-image small-image" />
                    </div>
                </div>
                <p>เอกสารเพิ่มเติมเกี่ยวกับ TESA Top Gun Rally#16 2022 ---- <a href="https://drive.google.com/drive/folders/1sWn9JnTmhJWYhe0rpOc6_UA42I2xYtpW" target="_blank" rel="noopener noreferrer">คลิ๊ก</a></p>
            </div>

            <div className="education-card styled-card">
            <p><strong>เข้าร่วมเป็นตัวประกอบภาพยนตร์สั้น:</strong> "ก้อนหินที่หายไป"</p> {/* New content */}
                <p><strong>จัดทำโดย:</strong> สถาบันเพื่อการยุติธรรมแห่งประเทศไทย (องค์การมหาชน)</p> {/* New content */}
                <p><strong>เนื้อเรื่อง:</strong> ก้อนหินก้อนหนึ่งทำให้คนตาย ก้อนหินก้อนนั้นฝังใจจนตายทั้งเป็น แต่ทว่า ... ก้อนหินกลับสลายไปด้วยกระบวนการยุติธรรมเชิงสมานฉันท์ (RJ) จากข่าวดัง "วัยรุ่นปาหินใส่รถตู้" สู่ภาพยนตร์สั้น "ก้อนหินที่หายไป" ภาพยนตร์สะท้อนเรื่องราวที่จะช่วยให้คุณเข้าใจ "กระบวนการยุติธรรมเชิงสมานฉันท์ (Restorative Justice)" มากขึ้น ภาพยนตร์สั้นนี้ฉายครั้งแรกในงานเสวนาวิชาการเนื่องในโอกาสครบรอบ 20 ปี ของการรับรองข้อมติสหประชาชาติ เรื่อง หลักการพื้นฐานขององค์การสหประชาชาติว่าด้วยกระบวนการยุติธรรมเชิงสมานฉันท์ในเรื่องทางอาญา อำนวยการผลิตโดยสถาบันเพื่อการยุติธรรมแห่งประเทศไทย (TIJ) แล้วคุณจะรู้ว่า กระบวนการ RJ ทำให้ “การให้อภัยและการสำนึกผิด” เกิดขึ้นจริงได้อย่างไร?</p> {/* New content */}
                <p><strong>YouTube:</strong> <a href="https://www.youtube.com/watch?v=tkbltRV04Fo" target="_blank" rel="noopener noreferrer">"ก้อนหินที่หายไป"</a></p> {/* New content */}
                <div className="image-container">
                    <img src={MV_1} alt="Slideshow" className="custom-image" /> 
                </div>
            </div>

            <footer className="footer">
                <p>© 2024 Khajornsa Suksila. Computer Engineering </p>
                <div className="contact-icons">
                    <a href="https://www.facebook.com/aaon.khajornsak.7" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Facebook" className="facebook-icon"  />
                    </a>
                    <a href="https://www.youtube.com/channel/UCkDFnlvcIB1ofHnNl6B2tUQ" target="_blank" rel="noopener noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="YouTube" className="youtube-icon" />  
                    </a>
                    <strong> : Khajornsak Suksila</strong>
                </div>
            </footer>
        </div>
    );
}

export default Portfolio;

