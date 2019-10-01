(function($) {

    var form = $("#signup-form");
    form.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        labels: {
            previous : 'Prev',
            next : 'Next',
            finish : 'Finish',
            current : ''
        },
        titleTemplate : '<h3 class="title">#title#</h3>',
        onFinished: function (event, currentIndex)
        {
            alert('Submitted');
        }
    });


})(jQuery);
