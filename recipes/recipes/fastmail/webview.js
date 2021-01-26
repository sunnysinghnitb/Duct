'use strict';

module.exports = (Franz, options) => {
  var interval = setInterval(function () {
    if (!window.O || !window.O.WindowController) return;
    window.O.WindowController.openExternal = function (href) {
      var temp = document.createElement('a');
      temp.setAttribute('href', href);
      temp.setAttribute('target', '_blank');
      temp.click();
    };
    clearInterval(interval);
  }, 200);
  const getMessages = () => {
    const inbox = document.querySelector(".v-MailboxSource--inbox .v-MailboxSource-badge");
    if (!inbox) {
      return;
    }
    const messages = Number(inbox.innerText);
    if (!Number.isNaN(messages)) {
      Franz.setBadge(messages);
    }
  };

  Franz.loop(getMessages);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhc3RtYWlsL3dlYnZpZXcuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIkZyYW56Iiwib3B0aW9ucyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ3aW5kb3ciLCJPIiwiV2luZG93Q29udHJvbGxlciIsIm9wZW5FeHRlcm5hbCIsImhyZWYiLCJ0ZW1wIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xpY2siLCJjbGVhckludGVydmFsIiwiZ2V0TWVzc2FnZXMiLCJpbmJveCIsInF1ZXJ5U2VsZWN0b3IiLCJtZXNzYWdlcyIsIk51bWJlciIsImlubmVyVGV4dCIsImlzTmFOIiwic2V0QmFkZ2UiLCJsb29wIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxPQUFQLEdBQWlCLENBQUNDLEtBQUQsRUFBUUMsT0FBUixLQUFvQjtBQUNuQyxNQUFJQyxXQUFXQyxZQUFZLFlBQVk7QUFDckMsUUFBSSxDQUFDQyxPQUFPQyxDQUFSLElBQWEsQ0FBQ0QsT0FBT0MsQ0FBUCxDQUFTQyxnQkFBM0IsRUFBNkM7QUFDN0NGLFdBQU9DLENBQVAsQ0FBU0MsZ0JBQVQsQ0FBMEJDLFlBQTFCLEdBQXlDLFVBQVVDLElBQVYsRUFBZ0I7QUFDdkQsVUFBSUMsT0FBT0MsU0FBU0MsYUFBVCxDQUF1QixHQUF2QixDQUFYO0FBQ0FGLFdBQUtHLFlBQUwsQ0FBa0IsTUFBbEIsRUFBMEJKLElBQTFCO0FBQ0FDLFdBQUtHLFlBQUwsQ0FBa0IsUUFBbEIsRUFBNEIsUUFBNUI7QUFDQUgsV0FBS0ksS0FBTDtBQUNELEtBTEQ7QUFNQUMsa0JBQWNaLFFBQWQ7QUFDRCxHQVRjLEVBU1osR0FUWSxDQUFmO0FBVUEsUUFBTWEsY0FBYyxNQUFNO0FBQ3hCLFVBQU1DLFFBQVFOLFNBQVNPLGFBQVQsQ0FBdUIsOENBQXZCLENBQWQ7QUFDQSxRQUFJLENBQUNELEtBQUwsRUFBWTtBQUNWO0FBQ0Q7QUFDRCxVQUFNRSxXQUFXQyxPQUFPSCxNQUFNSSxTQUFiLENBQWpCO0FBQ0EsUUFBSSxDQUFDRCxPQUFPRSxLQUFQLENBQWFILFFBQWIsQ0FBTCxFQUE2QjtBQUMzQmxCLFlBQU1zQixRQUFOLENBQWVKLFFBQWY7QUFDRDtBQUNGLEdBVEQ7O0FBV0FsQixRQUFNdUIsSUFBTixDQUFXUixXQUFYO0FBQ0QsQ0F2QkQiLCJmaWxlIjoiZmFzdG1haWwvd2Vidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gKEZyYW56LCBvcHRpb25zKSA9PiB7XG4gIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXdpbmRvdy5PIHx8ICF3aW5kb3cuTy5XaW5kb3dDb250cm9sbGVyKSByZXR1cm47XG4gICAgd2luZG93Lk8uV2luZG93Q29udHJvbGxlci5vcGVuRXh0ZXJuYWwgPSBmdW5jdGlvbiAoaHJlZikge1xuICAgICAgdmFyIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB0ZW1wLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgdGVtcC5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKTtcbiAgICAgIHRlbXAuY2xpY2soKTtcbiAgICB9O1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICB9LCAyMDApO1xuICBjb25zdCBnZXRNZXNzYWdlcyA9ICgpID0+IHtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudi1Gb2xkZXJTb3VyY2UtLWluYm94Pi52LUZvbGRlclNvdXJjZS1iYWRnZVwiKTtcbiAgICBpZiAoIWluYm94KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1lc3NhZ2VzID0gTnVtYmVyKGluYm94LmlubmVyVGV4dCk7XG4gICAgaWYgKCFOdW1iZXIuaXNOYU4obWVzc2FnZXMpKSB7XG4gICAgICBGcmFuei5zZXRCYWRnZShtZXNzYWdlcyk7XG4gICAgfVxuICB9XG5cbiAgRnJhbnoubG9vcChnZXRNZXNzYWdlcyk7XG59XG4iXX0=