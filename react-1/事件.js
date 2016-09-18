var Usercenter = React.createClass({
	handleClick:function(event) {
	  console.log(event); // => nullified object.
	  console.log(event.type); // => "click"
	  var eventType = event.type; // => "click"
	
	  setTimeout(function() {  
	    console.log(event.type); // => null
	    console.log(eventType); // => "click"
	  }, 0);
	
		this.setState({liked: !this.state.liked });
	  this.setState({clickEvent: event}); // Won't work. this.state.clickEvent will only contain null values.
	  this.setState({eventType: event.type}); // You can still export event properties.
	},

  render: function () {
  	const text = this.state.liked ? 'like' : 'haven\'t liked';
  	
    return (
       <p onClick={this.handleClick.bind(this)}>
          You {text} this. Click to toggle.
      </p>
    );
  }
});

