import React from 'react';
import './styles/homeMainContent.css';

export default function HomeMainContent({ images }) {
  return (
    <div className='homeMainContent'>
        <div className='content_left' style={{backgroundImage: `url(${images.background.collage})`}}></div>
        <div className='content_middle'>
          <div className='content_middle_inner'>
            <h3>אז.. נעים מאוד, אני יונית לנדאו רז</h3>
            <p dir='rtl' className='content_middle_inner_p'>
              {/* <span className='content_middle_inner_p_span'>נעים מאוד,</span> */}
              
              בת 43 חיה עם עידן המהמם, ואמא של שי-לי, ירין, עלמה ועדי אוצרות חיי.
            </p>
            <p dir='rtl' className='content_middle_inner_p'>
              הסיפור האישי שלי לא התחיל בבית נורמטיבי שמגדל לצמיחה,
              
              כמה פעמים בחיים שמעתם את המילה
              <span className='content_middle_inner_p_span'> לא</span>?.. 
              כנראה המון,
              אני שמעתי בעיקר לא!
            </p>
            <p dir='rtl' className='content_middle_inner_p'>
              לא תצליחי.. אי אפשר.. זה לא בשבילך.. את לא יכולה.. אין לך..
              מסע חיי היה לשבור תקרות זכוכית שהסביבה, המשפחה כולם בחרו אותם עבורי, כולם! רק לא 
              <span className='content_middle_inner_p_span'> אני</span>
            </p>
            <p dir='rtl' className='content_middle_inner_p'>

              אז נקודת הפתיחה במרוץ חיי היה.. כשדלת ביתי נפתחה והושלכתי לרחוב .
              שם נפלתי קמתי שרדתי הושפלתי נפגעתי נוצלתי ו...
              השעות הבדידות הפחד הקור הרעב 
              הידיעה שאין לך למי לפנות 
              הצפייה במשפחות.. אורות דולקים בחלונות ואת.. לא מעניינת ולא חשובה לאיש
            </p>
            <p dir='rtl' className='content_middle_inner_p'>
              הכעס, למה? למה אני חיה בכלל?
              אובדנות..
              כל חלומי היה להפסיק לכאוב, 
              כל בוקר כל לילה כל רגע כל שניה הישרדות מחדש..
              הים הפך לחבר הכי טוב שלי,
              כל רגע כזה היה בסוף שיעור,
              הכוח שב
              <span className='content_middle_inner_p_span'>אמונה</span>..
              ורגע אחד שאמר לי.. שאין מצב שעברתי את כל התופת הזו סתם, אני חייבת להעביר את זה הלאה ולכן,
            </p>
             <p dir='rtl' className='content_middle_inner_p'> 
               אני מזמינה אתכם לקבל את הניסיון והשיעורים שלי ככלים להצלחה שלכם ועבורכם
              בלי סיסמאות וקלישאות.. בלי נימוסים מיותרים, ממני אליכם לפנים!

            </p>
          </div>
            <ul dir='rtl' className='content_middle_inner_ul'>
              <li className='content_middle_inner_li'>בעלת קליניקה טיפולית</li>
              <li className='content_middle_inner_li'>מנחת קבוצות לימוד</li>
              <li className='content_middle_inner_li'>מעבירה סדנאות והצאות להעצמה נשית ואישית</li>
              <li className='content_middle_inner_li'>מאסטר טריינר NLP</li>
              <li className='content_middle_inner_li'>מדריכת הורים וילדים</li>
              <li className='content_middle_inner_li'>מטפלת באנשים שרוצים לבחור את החיים ואת מסלול ההצלחה שלהם</li>
            </ul>
        </div>
        <div className='content_right' style={{backgroundImage: `url(${images.background.background1})`}}></div>
    </div>
  )
}
