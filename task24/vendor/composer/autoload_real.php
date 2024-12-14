<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInit742e5b41b5a4da2099c8455d7aea5007
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInit742e5b41b5a4da2099c8455d7aea5007', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInit742e5b41b5a4da2099c8455d7aea5007', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInit742e5b41b5a4da2099c8455d7aea5007::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}