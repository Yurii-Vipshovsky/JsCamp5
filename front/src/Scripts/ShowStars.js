const ShowStars = starCount => {
    let content = [];
    for (let i=0;i<starCount; ++i) {
      content.push(<div class="star-image"></div>);
    }
    for(let i=starCount;i<5;++i){
        content.push(<div class="star-image-empty"></div>);
    }
    return content;
};

export default ShowStars;