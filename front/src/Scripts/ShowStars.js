const ShowStars = starCount => {
    let content = [];
    for (let i=0;i<starCount; ++i) {
      content.push(<div class="star-image"></div>);
    }
    return content;
};

export default ShowStars;