$(document).ready(function(){
	
	var view = new View

	view.addImage('reading', 'svg', 'strategy_icon', '#strategy_wrapper')
	view.addImage('todo_list', 'svg', 'strategy_icon', '#strategy_wrapper')
	view.addImage('bullish', 'svg', 'strategy_icon', '#strategy_wrapper')
	view.addImage('collaboration', 'svg', 'strategy_icon', '#strategy_wrapper')
	view.addImage('inspection', 'svg', 'strategy_icon', '#strategy_wrapper')

	$('.strategy_icon').on('mouseenter', function(e){
		var strategy = e.currentTarget.attributes.id
		view.displayStrategy(strategy)
	})

	$('.strategy_icon').on('mouseleave', function(e){
		var strategy = e.currentTarget.attributes.id
		view.hideStrategy(strategy)
	})
})