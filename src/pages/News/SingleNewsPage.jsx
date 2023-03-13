import { Box, Button, Container, Modal, Tab, Tabs, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import newsSliderImg from '../../assets/images/news-slider-img.png';
import sliderLeftLogo from '../../assets/images/slider-left-btn.png';
import '../../assets/styles/News.css';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';



const newsData =[
    {id:1, img:newsSliderImg, title:"المركز الوطني لسلامة الطرق بالشراكة مع أمن الطرق يــطـــلـــق حـمــلـــة ” درب الـســـلامــــة “ تــزامــنــــاً مــع الإجـــازة", content:` دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن الطرق اليوم حملة ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط الأمني بطريق الرياض / الدمام بحضور قائد القوات الخاصة لأمن الطرق اللواء خالد الضبيب ووكيل وزارة النقل المهندس طارق الشامي ورئيس المركز الوطني لسلامة الطرق الدكتور علي الغامدي
    وتستهدف الحملة المسافرين خلال موسم الإجازة لرفع مستوى التوعية بالسلامة المرورية عن طريق المنشورات الورقية ولوحات الطرق والمحتوى الرقمي بمواقع التواصل الاجتماعي
    وركزت الحملة على تعزيز التوعية بأبرز الممارسات السليمة لقائدي المركبات كضرورة ربط حزام الأمان وفحص المركبة والإطارات قبل السفر وأخذ قسط كافي من النوم، إلى جانب تعزيز التنبيه بأبرز الممارسات الخاطئة التي قد يقع فيها قائد المركبة كاستخدام الجوال والسرعة الزائدة 
    وركز جانب من الحملة على غرس مفاهيم سلامة الأطفال عبر استهدافهم برسائل توعوية تأسس هذه المبادئ
    وسيتم توسيع نطاق الحملة مستقبلاً لتشمل جميع مناطق المملكة للتوعية بالسلامة على الطرق والحفاظ على الأرواح
    يشار إلى أن المركز الوطني لسلامة الطرق هو أحد مبادرات برنامج التحول الوطني وبإشراف وزارة النقل`},
    {id:2, img:newsSliderImg, title:"المركز الوطني لسلامة الطرق بالشراكة مع أمن الطرق يــطـــلـــق حـمــلـــة ” درب الـســـلامــــة “ تــزامــنــــاً مــع الإجـــازة", content:` دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن الطرق اليوم حملة ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط الأمني بطريق الرياض / الدمام بحضور قائد القوات الخاصة لأمن الطرق اللواء خالد الضبيب ووكيل وزارة النقل المهندس طارق الشامي ورئيس المركز الوطني لسلامة الطرق الدكتور علي الغامدي
    وتستهدف الحملة المسافرين خلال موسم الإجازة لرفع مستوى التوعية بالسلامة المرورية عن طريق المنشورات الورقية ولوحات الطرق والمحتوى الرقمي بمواقع التواصل الاجتماعي
    وركزت الحملة على تعزيز التوعية بأبرز الممارسات السليمة لقائدي المركبات كضرورة ربط حزام الأمان وفحص المركبة والإطارات قبل السفر وأخذ قسط كافي من النوم، إلى جانب تعزيز التنبيه بأبرز الممارسات الخاطئة التي قد يقع فيها قائد المركبة كاستخدام الجوال والسرعة الزائدة 
    وركز جانب من الحملة على غرس مفاهيم سلامة الأطفال عبر استهدافهم برسائل توعوية تأسس هذه المبادئ
    وسيتم توسيع نطاق الحملة مستقبلاً لتشمل جميع مناطق المملكة للتوعية بالسلامة على الطرق والحفاظ على الأرواح
    يشار إلى أن المركز الوطني لسلامة الطرق هو أحد مبادرات برنامج التحول الوطني وبإشراف وزارة النقل`},
    {id:3, img:newsSliderImg, title:"المركز الوطني لسلامة الطرق بالشراكة مع أمن الطرق يــطـــلـــق حـمــلـــة ” درب الـســـلامــــة “ تــزامــنــــاً مــع الإجـــازة", content:` دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن الطرق اليوم حملة ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط الأمني بطريق الرياض / الدمام بحضور قائد القوات الخاصة لأمن الطرق اللواء خالد الضبيب ووكيل وزارة النقل المهندس طارق الشامي ورئيس المركز الوطني لسلامة الطرق الدكتور علي الغامدي
    وتستهدف الحملة المسافرين خلال موسم الإجازة لرفع مستوى التوعية بالسلامة المرورية عن طريق المنشورات الورقية ولوحات الطرق والمحتوى الرقمي بمواقع التواصل الاجتماعي
    وركزت الحملة على تعزيز التوعية بأبرز الممارسات السليمة لقائدي المركبات كضرورة ربط حزام الأمان وفحص المركبة والإطارات قبل السفر وأخذ قسط كافي من النوم، إلى جانب تعزيز التنبيه بأبرز الممارسات الخاطئة التي قد يقع فيها قائد المركبة كاستخدام الجوال والسرعة الزائدة 
    وركز جانب من الحملة على غرس مفاهيم سلامة الأطفال عبر استهدافهم برسائل توعوية تأسس هذه المبادئ
    وسيتم توسيع نطاق الحملة مستقبلاً لتشمل جميع مناطق المملكة للتوعية بالسلامة على الطرق والحفاظ على الأرواح
    يشار إلى أن المركز الوطني لسلامة الطرق هو أحد مبادرات برنامج التحول الوطني وبإشراف وزارة النقل`},
    {id:4, img:newsSliderImg, title:"المركز الوطني لسلامة الطرق بالشراكة مع أمن الطرق يــطـــلـــق حـمــلـــة ” درب الـســـلامــــة “ تــزامــنــــاً مــع الإجـــازة", content:` دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن الطرق اليوم حملة ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط الأمني بطريق الرياض / الدمام بحضور قائد القوات الخاصة لأمن الطرق اللواء خالد الضبيب ووكيل وزارة النقل المهندس طارق الشامي ورئيس المركز الوطني لسلامة الطرق الدكتور علي الغامدي
    وتستهدف الحملة المسافرين خلال موسم الإجازة لرفع مستوى التوعية بالسلامة المرورية عن طريق المنشورات الورقية ولوحات الطرق والمحتوى الرقمي بمواقع التواصل الاجتماعي
    وركزت الحملة على تعزيز التوعية بأبرز الممارسات السليمة لقائدي المركبات كضرورة ربط حزام الأمان وفحص المركبة والإطارات قبل السفر وأخذ قسط كافي من النوم، إلى جانب تعزيز التنبيه بأبرز الممارسات الخاطئة التي قد يقع فيها قائد المركبة كاستخدام الجوال والسرعة الزائدة 
    وركز جانب من الحملة على غرس مفاهيم سلامة الأطفال عبر استهدافهم برسائل توعوية تأسس هذه المبادئ
    وسيتم توسيع نطاق الحملة مستقبلاً لتشمل جميع مناطق المملكة للتوعية بالسلامة على الطرق والحفاظ على الأرواح
    يشار إلى أن المركز الوطني لسلامة الطرق هو أحد مبادرات برنامج التحول الوطني وبإشراف وزارة النقل`},
    {id:5, img:newsSliderImg, title:"المركز الوطني لسلامة الطرق بالشراكة مع أمن الطرق يــطـــلـــق حـمــلـــة ” درب الـســـلامــــة “ تــزامــنــــاً مــع الإجـــازة", content:` دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن الطرق اليوم حملة ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط الأمني بطريق الرياض / الدمام بحضور قائد القوات الخاصة لأمن الطرق اللواء خالد الضبيب ووكيل وزارة النقل المهندس طارق الشامي ورئيس المركز الوطني لسلامة الطرق الدكتور علي الغامدي
    وتستهدف الحملة المسافرين خلال موسم الإجازة لرفع مستوى التوعية بالسلامة المرورية عن طريق المنشورات الورقية ولوحات الطرق والمحتوى الرقمي بمواقع التواصل الاجتماعي
    وركزت الحملة على تعزيز التوعية بأبرز الممارسات السليمة لقائدي المركبات كضرورة ربط حزام الأمان وفحص المركبة والإطارات قبل السفر وأخذ قسط كافي من النوم، إلى جانب تعزيز التنبيه بأبرز الممارسات الخاطئة التي قد يقع فيها قائد المركبة كاستخدام الجوال والسرعة الزائدة 
    وركز جانب من الحملة على غرس مفاهيم سلامة الأطفال عبر استهدافهم برسائل توعوية تأسس هذه المبادئ
    وسيتم توسيع نطاق الحملة مستقبلاً لتشمل جميع مناطق المملكة للتوعية بالسلامة على الطرق والحفاظ على الأرواح
    يشار إلى أن المركز الوطني لسلامة الطرق هو أحد مبادرات برنامج التحول الوطني وبإشراف وزارة النقل`},
    {id:6, img:newsSliderImg, title:"المركز الوطني لسلامة الطرق بالشراكة مع أمن الطرق يــطـــلـــق حـمــلـــة ” درب الـســـلامــــة “ تــزامــنــــاً مــع الإجـــازة", content:` دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن الطرق اليوم حملة ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط الأمني بطريق الرياض / الدمام بحضور قائد القوات الخاصة لأمن الطرق اللواء خالد الضبيب ووكيل وزارة النقل المهندس طارق الشامي ورئيس المركز الوطني لسلامة الطرق الدكتور علي الغامدي
    وتستهدف الحملة المسافرين خلال موسم الإجازة لرفع مستوى التوعية بالسلامة المرورية عن طريق المنشورات الورقية ولوحات الطرق والمحتوى الرقمي بمواقع التواصل الاجتماعي
    وركزت الحملة على تعزيز التوعية بأبرز الممارسات السليمة لقائدي المركبات كضرورة ربط حزام الأمان وفحص المركبة والإطارات قبل السفر وأخذ قسط كافي من النوم، إلى جانب تعزيز التنبيه بأبرز الممارسات الخاطئة التي قد يقع فيها قائد المركبة كاستخدام الجوال والسرعة الزائدة 
    وركز جانب من الحملة على غرس مفاهيم سلامة الأطفال عبر استهدافهم برسائل توعوية تأسس هذه المبادئ
    وسيتم توسيع نطاق الحملة مستقبلاً لتشمل جميع مناطق المملكة للتوعية بالسلامة على الطرق والحفاظ على الأرواح
    يشار إلى أن المركز الوطني لسلامة الطرق هو أحد مبادرات برنامج التحول الوطني وبإشراف وزارة النقل`},
    {id:7, img:newsSliderImg, title:"المركز الوطني لسلامة الطرق بالشراكة مع أمن الطرق يــطـــلـــق حـمــلـــة ” درب الـســـلامــــة “ تــزامــنــــاً مــع الإجـــازة", content:` دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن الطرق اليوم حملة ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط الأمني بطريق الرياض / الدمام بحضور قائد القوات الخاصة لأمن الطرق اللواء خالد الضبيب ووكيل وزارة النقل المهندس طارق الشامي ورئيس المركز الوطني لسلامة الطرق الدكتور علي الغامدي
    وتستهدف الحملة المسافرين خلال موسم الإجازة لرفع مستوى التوعية بالسلامة المرورية عن طريق المنشورات الورقية ولوحات الطرق والمحتوى الرقمي بمواقع التواصل الاجتماعي
    وركزت الحملة على تعزيز التوعية بأبرز الممارسات السليمة لقائدي المركبات كضرورة ربط حزام الأمان وفحص المركبة والإطارات قبل السفر وأخذ قسط كافي من النوم، إلى جانب تعزيز التنبيه بأبرز الممارسات الخاطئة التي قد يقع فيها قائد المركبة كاستخدام الجوال والسرعة الزائدة 
    وركز جانب من الحملة على غرس مفاهيم سلامة الأطفال عبر استهدافهم برسائل توعوية تأسس هذه المبادئ
    وسيتم توسيع نطاق الحملة مستقبلاً لتشمل جميع مناطق المملكة للتوعية بالسلامة على الطرق والحفاظ على الأرواح
    يشار إلى أن المركز الوطني لسلامة الطرق هو أحد مبادرات برنامج التحول الوطني وبإشراف وزارة النقل`},
    {id:8, img:newsSliderImg, title:"المركز الوطني لسلامة الطرق بالشراكة مع أمن الطرق يــطـــلـــق حـمــلـــة ” درب الـســـلامــــة “ تــزامــنــــاً مــع الإجـــازة", content:` دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن الطرق اليوم حملة ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط الأمني بطريق الرياض / الدمام بحضور قائد القوات الخاصة لأمن الطرق اللواء خالد الضبيب ووكيل وزارة النقل المهندس طارق الشامي ورئيس المركز الوطني لسلامة الطرق الدكتور علي الغامدي
    وتستهدف الحملة المسافرين خلال موسم الإجازة لرفع مستوى التوعية بالسلامة المرورية عن طريق المنشورات الورقية ولوحات الطرق والمحتوى الرقمي بمواقع التواصل الاجتماعي
    وركزت الحملة على تعزيز التوعية بأبرز الممارسات السليمة لقائدي المركبات كضرورة ربط حزام الأمان وفحص المركبة والإطارات قبل السفر وأخذ قسط كافي من النوم، إلى جانب تعزيز التنبيه بأبرز الممارسات الخاطئة التي قد يقع فيها قائد المركبة كاستخدام الجوال والسرعة الزائدة 
    وركز جانب من الحملة على غرس مفاهيم سلامة الأطفال عبر استهدافهم برسائل توعوية تأسس هذه المبادئ
    وسيتم توسيع نطاق الحملة مستقبلاً لتشمل جميع مناطق المملكة للتوعية بالسلامة على الطرق والحفاظ على الأرواح
    يشار إلى أن المركز الوطني لسلامة الطرق هو أحد مبادرات برنامج التحول الوطني وبإشراف وزارة النقل`},
    {id:9, img:newsSliderImg, title:"المركز الوطني لسلامة الطرق بالشراكة مع أمن الطرق يــطـــلـــق حـمــلـــة ” درب الـســـلامــــة “ تــزامــنــــاً مــع الإجـــازة", content:` دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن الطرق اليوم حملة ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط الأمني بطريق الرياض / الدمام بحضور قائد القوات الخاصة لأمن الطرق اللواء خالد الضبيب ووكيل وزارة النقل المهندس طارق الشامي ورئيس المركز الوطني لسلامة الطرق الدكتور علي الغامدي
    وتستهدف الحملة المسافرين خلال موسم الإجازة لرفع مستوى التوعية بالسلامة المرورية عن طريق المنشورات الورقية ولوحات الطرق والمحتوى الرقمي بمواقع التواصل الاجتماعي
    وركزت الحملة على تعزيز التوعية بأبرز الممارسات السليمة لقائدي المركبات كضرورة ربط حزام الأمان وفحص المركبة والإطارات قبل السفر وأخذ قسط كافي من النوم، إلى جانب تعزيز التنبيه بأبرز الممارسات الخاطئة التي قد يقع فيها قائد المركبة كاستخدام الجوال والسرعة الزائدة 
    وركز جانب من الحملة على غرس مفاهيم سلامة الأطفال عبر استهدافهم برسائل توعوية تأسس هذه المبادئ
    وسيتم توسيع نطاق الحملة مستقبلاً لتشمل جميع مناطق المملكة للتوعية بالسلامة على الطرق والحفاظ على الأرواح
    يشار إلى أن المركز الوطني لسلامة الطرق هو أحد مبادرات برنامج التحول الوطني وبإشراف وزارة النقل`},
    {id:10, img:newsSliderImg, title:"المركز الوطني لسلامة الطرق بالشراكة مع أمن الطرق يــطـــلـــق حـمــلـــة ” درب الـســـلامــــة “ تــزامــنــــاً مــع الإجـــازة", content:` دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن الطرق اليوم حملة ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط الأمني بطريق الرياض / الدمام بحضور قائد القوات الخاصة لأمن الطرق اللواء خالد الضبيب ووكيل وزارة النقل المهندس طارق الشامي ورئيس المركز الوطني لسلامة الطرق الدكتور علي الغامدي
    وتستهدف الحملة المسافرين خلال موسم الإجازة لرفع مستوى التوعية بالسلامة المرورية عن طريق المنشورات الورقية ولوحات الطرق والمحتوى الرقمي بمواقع التواصل الاجتماعي
    وركزت الحملة على تعزيز التوعية بأبرز الممارسات السليمة لقائدي المركبات كضرورة ربط حزام الأمان وفحص المركبة والإطارات قبل السفر وأخذ قسط كافي من النوم، إلى جانب تعزيز التنبيه بأبرز الممارسات الخاطئة التي قد يقع فيها قائد المركبة كاستخدام الجوال والسرعة الزائدة 
    وركز جانب من الحملة على غرس مفاهيم سلامة الأطفال عبر استهدافهم برسائل توعوية تأسس هذه المبادئ
    وسيتم توسيع نطاق الحملة مستقبلاً لتشمل جميع مناطق المملكة للتوعية بالسلامة على الطرق والحفاظ على الأرواح
    يشار إلى أن المركز الوطني لسلامة الطرق هو أحد مبادرات برنامج التحول الوطني وبإشراف وزارة النقل`},
    {id:11, img:newsSliderImg, title:"المركز الوطني لسلامة الطرق بالشراكة مع أمن الطرق يــطـــلـــق حـمــلـــة ” درب الـســـلامــــة “ تــزامــنــــاً مــع الإجـــازة", content:` دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن الطرق اليوم حملة ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط الأمني بطريق الرياض / الدمام بحضور قائد القوات الخاصة لأمن الطرق اللواء خالد الضبيب ووكيل وزارة النقل المهندس طارق الشامي ورئيس المركز الوطني لسلامة الطرق الدكتور علي الغامدي
    وتستهدف الحملة المسافرين خلال موسم الإجازة لرفع مستوى التوعية بالسلامة المرورية عن طريق المنشورات الورقية ولوحات الطرق والمحتوى الرقمي بمواقع التواصل الاجتماعي
    وركزت الحملة على تعزيز التوعية بأبرز الممارسات السليمة لقائدي المركبات كضرورة ربط حزام الأمان وفحص المركبة والإطارات قبل السفر وأخذ قسط كافي من النوم، إلى جانب تعزيز التنبيه بأبرز الممارسات الخاطئة التي قد يقع فيها قائد المركبة كاستخدام الجوال والسرعة الزائدة 
    وركز جانب من الحملة على غرس مفاهيم سلامة الأطفال عبر استهدافهم برسائل توعوية تأسس هذه المبادئ
    وسيتم توسيع نطاق الحملة مستقبلاً لتشمل جميع مناطق المملكة للتوعية بالسلامة على الطرق والحفاظ على الأرواح
    يشار إلى أن المركز الوطني لسلامة الطرق هو أحد مبادرات برنامج التحول الوطني وبإشراف وزارة النقل`},
    {id:12, img:newsSliderImg, title:"المركز الوطني لسلامة الطرق بالشراكة مع أمن الطرق يــطـــلـــق حـمــلـــة ” درب الـســـلامــــة “ تــزامــنــــاً مــع الإجـــازة", content:` دشَّن المركز الوطني لسلامة الطرق بالشراكة مع القوات الخاصة لأمن الطرق اليوم حملة ” درب السلامة ” تزامناً مع بدء موسم الإجازة بمركز الضبط الأمني بطريق الرياض / الدمام بحضور قائد القوات الخاصة لأمن الطرق اللواء خالد الضبيب ووكيل وزارة النقل المهندس طارق الشامي ورئيس المركز الوطني لسلامة الطرق الدكتور علي الغامدي
    وتستهدف الحملة المسافرين خلال موسم الإجازة لرفع مستوى التوعية بالسلامة المرورية عن طريق المنشورات الورقية ولوحات الطرق والمحتوى الرقمي بمواقع التواصل الاجتماعي
    وركزت الحملة على تعزيز التوعية بأبرز الممارسات السليمة لقائدي المركبات كضرورة ربط حزام الأمان وفحص المركبة والإطارات قبل السفر وأخذ قسط كافي من النوم، إلى جانب تعزيز التنبيه بأبرز الممارسات الخاطئة التي قد يقع فيها قائد المركبة كاستخدام الجوال والسرعة الزائدة 
    وركز جانب من الحملة على غرس مفاهيم سلامة الأطفال عبر استهدافهم برسائل توعوية تأسس هذه المبادئ
    وسيتم توسيع نطاق الحملة مستقبلاً لتشمل جميع مناطق المملكة للتوعية بالسلامة على الطرق والحفاظ على الأرواح
    يشار إلى أن المركز الوطني لسلامة الطرق هو أحد مبادرات برنامج التحول الوطني وبإشراف وزارة النقل`},
];

const SingleNewsPage = () => {
    const {newsId} = useParams();
    const [newsAllData, setNewsAllData] = useState(newsData);
    const [filteredData, setFilteredData] = useState({});

    useEffect(() => {
        const singleData = newsAllData.filter((data) => data.id == newsId);
        setFilteredData(singleData[0])
    }, [])
    
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <>
            <Header />
            <Box sx={{mt:{xs:3, md:6}}}>
                <Container className='news-popup-elements'>
                    <Box className='new-tab-panel-container'>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="secondary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                            className='card-tab-panel_btns'
                        >
                            <Tab value="one" label="التوعية" />
                            <Tab value="two" label="الاخبار" />
                            <Tab value="three" label="الفعاليات" />
                        </Tabs>
                    </Box>
                    <Box className='news-popup_media'>
                        <img src={newsSliderImg} alt="" />
                    </Box>
                    <Box sx={{color:'white'}} className='news-popup_contents'>
                        <Typography variant='h4'>{filteredData.title}</Typography>
                        <Typography>
                            {filteredData.content}
                        </Typography>
                    </Box>
                </Container>
            </Box>
            <br /><br />
            <Footer />   
        </>
    );
};

export default SingleNewsPage;





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