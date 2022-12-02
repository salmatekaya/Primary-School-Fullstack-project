import React from 'react';

const Administration = () => (
    <div>
        <br/><br/><br/>
        <div class="ui three column grid">
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/admin/infos" style={{fontFamily:'Tajawal',marginLeft: '5rem' }}> المعلومات الشّخصيّة</a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/admin/teachermanagemnet" style={{fontFamily:'Tajawal' ,marginLeft: '5rem' }}>التصرف في المدرسين</a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/admin/classmanagement" style={{ fontFamily:'Tajawal',marginLeft: '5rem' }}>التصرف في الأقسام</a>
                    </div>
                </div>
            </div>
        </div>
        <br/><br/><br/> <br/><br/><br/>
        <div class =" ui one column grid">
            <div class="column">
            </div>
            <div class="column">
                <div class="ui centered card">
                    <div class="content" >
                        <a class="header" href="/admin/subjectmanagemnet" style={{fontFamily:'Tajawal' ,marginLeft: '6rem' }}>التّصرّف في المواد</a>
                    </div>
                </div>
            </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div class="ui three column grid">
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/admin/teacherrecru" style={{ fontFamily:'Tajawal',marginLeft: '6rem' }}>تعيين المدرّسين</a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/admin/teachertimetable" style={{fontFamily:'Tajawal',marginLeft: '5rem' }}>التّصرّف في جدول الأوقات </a>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="ui centered card">
                    <div class="content">
                        <a class="header" href="/admin/tools" style={{fontFamily:'Tajawal' ,marginLeft: '6rem' }}>صندوق الأدوات</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


)
export default Administration;