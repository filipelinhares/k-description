module('Default settings', {setup: function () {
    $('#qunit-fixture').description({});
}});

    test('testing default options', function () {
        var $kp = $('.kp'),
            $content = $('#qunit-fixture');

        //# Creation of elements
        ok($content.find('p.kp'), 'p.kp created');
        ok($content.find('span.kcontent'), 'span.kcontent created');
        
        //# CSS attrs
        ok($kp.css('width'), 'kwidth exist');
        equal($kp.css('height'), '100px', 'kheight correct');
        equal($kp.css('marginTop'), '100px', 'kmarginTop correct');
        equal($kp.css('opacity'), '1', 'kopacity correct');

        //# Description's text
        equal($kp.text(),'k-description jQuery', 'kcontent correct');
    });

    test('Interations', function () {
        var $kp = $('.kp'),
            $content = $('#qunit-fixture');

        //# On mouseover
        $content.trigger('mouseover');
        equal($content.find('.kp').css('overflow'), 'hidden', 'kp description has been hidden');
        equal($kp.css('marginTop'), '100px', 'kmarginTop correct');
        
        //# On mouseout
        $content.trigger('mouseout');
        equal($content.find('.kp').css('overflow'), 'visible', 'kp description has been hidden');
        equal($kp.css('marginTop'), '100px', 'kmarginTop correct');
    });

    test('Directions with "down" and "up"', function () {
        var $kp = $('.kp');

        //# Testing direction
        $('#qunit-fixture').description({
            kin: 'up'
        });
        equal($kp.css('marginTop'), '-100px', 'kin with up works fine');

        $('#qunit-fixture').description({
            kout: 'up'
        });
        equal($kp.css('marginTop'), '100px', 'kout with up works fine');
    });

module('Users settings', {setup: function () {
    $('#qunit-fixture').description({
        kheight: '200px',
        kwidth: '200px',
        kmarginTop: '200px',
        kduration: 1000,
        kopacity: '0.5',
        kcontent: 'Add test to my project'
    });
}});

    test('testing default options', function () {
        var $kp = $('.kp'),
            $content = $('#qunit-fixture');

        //# Creation of elements
        ok($content.find('p.kp'), 'p.kp created');
        ok($content.find('span.kcontent'), 'span.kcontent created');
        
        //# CSS attrs
        ok($kp.css('width'), 'kwidth exist');
        equal($kp.css('height'), '200px', 'kheight correct');
        equal($kp.css('marginTop'), '200px', 'kmarginTop correct');
        equal($kp.css('opacity'), '0.5', 'kopacity correct');

        //# Description's text
        equal($kp.text(), 'Add test to my project', 'kcontent correct');
    });

    test('Interations', function () {
        var $kp = $('.kp'),
            $content = $('#qunit-fixture')

        //# On mouseover
        $content.trigger('mouseover');
        equal($content.find('.kp').css('overflow'), 'hidden', 'kp description has been hidden');
        equal($kp.css('marginTop'), '200px', 'kmarginTop correct');
        
        //# On mouseout
        $content.trigger('mouseout');
        equal($content.find('.kp').css('overflow'), 'visible', 'kp description has been hidden');
        equal($kp.css('marginTop'), '200px', 'kmarginTop correct');
    });
