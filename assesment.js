'use strict';

// htmlと紐付け
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

// 指定した要素の子要素を消去
function removeAllChildren(element){
while(element.firstChild)
element.removeChild(element.firstChild);
}



assessmentButton.onclick = function(){
  const userName =userNameInput.value;
  if(userName.length === 0){
    return;
}
removeAllChildren(resultDivided);
const heder = document.createElement('h3');
heder.innerText='診断結果';
resultDivided.appendChild(heder);

const paragraph =document.createElement('p');
const result = asessment(userName);
paragraph.innerText = result;
resultDivided.appendChild(paragraph);

removeAllChildren(tweetDivided);
const anchor =document.createElement('a');
const hrefValue ='https://twitter.com/intent/tweet?button_hashtag=あなたのいいところ&ref_src=twsrc%5Etfw';

anchor.setAttribute('href',hrefValue);
anchor.className ='twitter-hashtag-button';
anchor.setAttribute('data-text',result);
anchor.innerText ='tweet #あなたのいいところ';

tweetDivided.appendChild(anchor);

const script = document.createElement('script');
script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
tweetDivided.appendChild(script);
}

userNameInput.onkeydown = event => {
  if (event.key === 'Enter') {
    // TODO ボタンのonclick() 処理を呼び出す
    assessmentButton.onclick()
  }
};

const ansers = [
  '{userName}さんのいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
  '{userName}さんのいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
  '{userName}さんのいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
  '{userName}さんのいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
  '{userName}さんさんのいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
  '{userName}さんのいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
  '{userName}さんのいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
  '{userName}さんのいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
  '{userName}さんのいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
  '{userName}さんのいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
  '{userName}さんのいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
  '{userName}さんのいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
  '{userName}さんのいいところは気配りです。{userName}の配慮が多くの人を救っています。',
  '{userName}さんのいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
  '{userName}さんのいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。',
  '{userName}さんのいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。'
];

function asessment(userName){
  let Code =0;
  for(let i =0; i< userName.length; i++){
    Code =Code +userName.charCodeAt(i);
  }
  const index =Code % ansers.length;
  let result = ansers[index];
  result = result.replace(/\{userName\}/g,userName);
  return result;
}
