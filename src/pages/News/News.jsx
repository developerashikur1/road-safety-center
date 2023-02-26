import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';
import newsSliderImg from '../../assets/images/news-slider-img.png';
import sliderLeftLogo from '../../assets/images/slider-left-btn.png';
import '../../assets/styles/News.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import NewsForm from './components/NewsForm';
import NewsSlider from './components/NewsSlider';

const News = () => {
    return (
        <>
            <Header />
            <br /><br />
            
            <br /><br /><br /><br /><br />
            
            <NewsSlider />
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
            <NewsForm />
            
            <br /><br /><br /><br />
                <NewsPopup />
            <Footer />   
        </>
    );
};

export default News;





const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height:'75%',
    width: '80%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    // p: 4,
  };
  

function NewsPopup () {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='news-popup-main'
      >
        {/* <Box><Button sx={{color:'white'}}>okay</Button></Box> */}
        <Box sx={style} className='news-popup-container'>
            <Button>
            <img src={sliderLeftLogo} alt="" />
            </Button>
            <Box className='news-popup-elements'>
                <Box className='news-popup_media'>
                    <img src={newsSliderImg} alt="" />
                </Box>
                <Box className='news-popup_contents'>
                    <Typography variant='h4'>المركز الوطني لسلامة الطرق بالشراكة مع أمن الطرق يــطـــلـــق حـمــلـــة ” درب الـســـلامــــة “ تــزامــنــــاً مــع الإجـــازة</Typography>
                    <Typography>
                        دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن الطرق اليوم حملة ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط الأمني بطريق الرياض / الدمام بحضور قائد القوات الخاصة لأمن الطرق اللواء خالد الضبيب ووكيل وزارة النقل المهندس طارق الشامي ورئيس المركز الوطني لسلامة الطرق الدكتور علي الغامدي
                        وتستهدف الحملة المسافرين خلال موسم الإجازة لرفع مستوى التوعية بالسلامة المرورية عن طريق المنشورات الورقية ولوحات الطرق والمحتوى الرقمي بمواقع التواصل الاجتماعي
                        وركزت الحملة على تعزيز التوعية بأبرز الممارسات السليمة لقائدي المركبات كضرورة ربط حزام الأمان وفحص المركبة والإطارات قبل السفر وأخذ قسط كافي من النوم، إلى جانب تعزيز التنبيه بأبرز الممارسات الخاطئة التي قد يقع فيها قائد المركبة كاستخدام الجوال والسرعة الزائدة 
                        وركز جانب من الحملة على غرس مفاهيم سلامة الأطفال عبر استهدافهم برسائل توعوية تأسس هذه المبادئ
                        وسيتم توسيع نطاق الحملة مستقبلاً لتشمل جميع مناطق المملكة للتوعية بالسلامة على الطرق والحفاظ على الأرواح
                        يشار إلى أن المركز الوطني لسلامة الطرق هو أحد مبادرات برنامج التحول الوطني وبإشراف وزارة النقل
                    </Typography>
                </Box>
            </Box>
        </Box>
      </Modal>
    </>
  );
}