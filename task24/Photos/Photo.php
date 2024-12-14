<?php
namespace Photos;

class Photo {
  private string $image;
  private string $text;

  public function __construct(string $image, string $text) {
    $this->image = $image;
    $this->text = $text;
  }

  public function get_html(): string {
    return 
    "<div class='photo'>" .
      "<img src='../assets/$this->image' alt=''>" .
      "<p>$this->text</p>" .
    "</div>";
  }
}