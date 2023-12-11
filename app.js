// Progression 1: create a function and fetch the api using axios
const x = [];

function info() {
  const y = document.getElementById('blog');
  axios
    .get(
      'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=dd9d993491278227f8c0fa5ac3e8f074'
    )
    .then((res) => {
      const articles = res.data.articles;
      articles.forEach((i) => {
        const n = document.createElement('div');
        n.setAttribute('id', 'article');
        n.setAttribute('class', 'article');
        const heading = document.createElement('h1');
        const body = document.createElement('p');
        const picture = document.createElement('img');
        picture.setAttribute('src', i.image);
        heading.innerText = i.title;
        body.innerText = i.content;
        n.append(picture);
        n.append(heading);
        n.append(body);
        x.push(n);
      });

      x.forEach((k) => {
        y.append(k);
      });
    });
}

info();
