<?php 
namespace Photos;
use mysqli;

class DB {
  static $host = "localhost";
  static $user = "root";
  static $password = "root"; 
  static $db = "my_db1";
  public $link;

  public function __construct() {
    $this->link = new mysqli("localhost", "root", "root", "my_db1");
    $this->link->set_charset("utf8");
  }
  
  public function get_all_photos() {
    return $this->link->query("select * from `photos`")->fetch_all(MYSQLI_ASSOC);
  }
}