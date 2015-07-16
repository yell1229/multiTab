## MultiTab 


 1. 탭 사용시  으로 접근한다.
 2. 반드시 a Tag를 사용하고, 해당 내용을 가르키는 id를 href에 작성한다.
 3. id는 중복으로 사용하면 안된다.
 4. 기본이벤트는 click

스크립트 예시)

    <script src="jquery.multiTab.js"></script>
    <script type="text/javascript">
    $('#tab_box li a').multiTab();
    $('#tab_box3 li').multiTab('data-target', 'mouseenter');
    </script>

 - 첫번째 인자값 : 가져와야하는 target (default:href)
 - 두번째 인자값: 이벤트  (default: click), 이벤트값을 적용시 첫번째 인자값을 써줘야 한다.







