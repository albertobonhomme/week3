module.exports = fileactions;

function output(episodes){ 
    
    var sortedepisodes = sort_episodes(episodes)
  	var jonappears = searchFor(episodes)

    for (var i=0; i<sortedepisodes.length; i++) {
    var stars = (Math.floor(sortedepisodes[i].rating));
	var symbol = '*';
    console.log("Title " + sortedepisodes[i].title + " Episode #:" + sortedepisodes[i].episode_number)
	console.log(sortedepisodes[i].description)
	console.log("Rating:" + sortedepisodes[i].rating + " " + Array(stars).join(symbol) + "\n" +searchFor(sortedepisodes[i].description) + "\n")
	}
}

function sort_episodes(episodes){
	var sorted = episodes.sort(function(a,b){return a.episode_number - b.episode_number})
	return sorted;
}

function fileactions(err, file){
	if (err) {
        throw err;
    }
    var episodes = JSON.parse(file)
	var low_rated = episodes.filter(function(episode){
		return (episode.rating < 8.5);});
	output(low_rated);
	}

function searchFor (episode){
		if (episode.indexOf("Jon") != -1) {
			return ("Jon is in this episode")
		} else {
			return ("")
		}
}