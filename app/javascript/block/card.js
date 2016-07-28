var $cards = document.querySelectorAll('.card');
var $cardOptions = document.querySelectorAll('.card-options');

for (var i = 0; i < $cards.length; i++) {
  $cards[i].addEventListener('click', function (event){
    var $this = event.target;
    var $card = this;

    if($this.dataset.color){
      $card.dataset.color = $this.dataset.color;

      for (var i = 0; i < $cardOptions.length; i++) {
        $cardOptions[i].classList.remove('isActive');
      }

      $this.classList.add('isActive');
    }

    if($this.classList.contains('card_delete')){
      $card.remove();
    }

    if($this.classList.contains('card_edit')) {
      var $cardContent = document.querySelector('.card-content');
      if($cardContent.getAttribute('contenteditable') == 'false'){
        $cardContent.setAttribute('contenteditable', 'true');
        $cardContent.focus();
        $this.classList.add('isActive');
      } else {
        $cardContent.setAttribute('contenteditable', 'false');
        $cardContent.blur();
        $this.classList.remove('isActive');
      }
    }

  });
}
