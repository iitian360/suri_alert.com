// api key:51e987635e404fb1b1f1879d4d66d39f

let news_accordion = document.getElementById('news_accordion');
let apiKey = '51e987635e404fb1b1f1879d4d66d39f';
// let source='bbc-news';

const xhr = new XMLHttpRequest();


xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=51e987635e404fb1b1f1879d4d66d39f', true);

xhr.onload = function () {

    let text = JSON.parse(this.responseText);
    let articles = text.articles;
    console.log(articles);
    let news_html="";
   articles.forEach(function(element,index) {
       
   
        console.log(element.articles);

        let news_ = `<div class="accordion-item new-dom">
                    <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="false" aria-controls="panelsStayOpen-collapse${index}">
                  <strong style="color:red;">Breaking News ${index+1}:</strong>  
                  ${element["title"]}
                  </button>
                  </h2>
                  <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading${index}">
                   <div class="accordion-body">
                ${element["content"]} <a href="${element["url"]}" target="_blank">Read more here"</a>.
        </div>
    </div>
</div>`;
news_html+=news_;
});
news_accordion.innerHTML=news_html;
}
xhr.send();


