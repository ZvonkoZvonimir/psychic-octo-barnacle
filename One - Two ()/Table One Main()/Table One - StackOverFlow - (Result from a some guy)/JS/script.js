$(document).ready(function() {
    // get first row,clone it then remove it
    var firstRow = $("#my-table")
      .find('tbody')
      .find('.contact-row')
      .first().hide();
    var cloneRow = firstRow.clone(true).data('last-row-counter', 0).show();
    firstRow.remove();
  
    $('#new-row-btn').on('click', function() {
      // just use the table to keep track of rows added
      let idCounter = $("#my-table").data('lastrowadded') + 1;
      $("#my-table").data('lastrowadded', idCounter);
  
      var newRow = cloneRow.clone(true);
      newRow.find('.save-Btn').hide()
      newRow.find('.td-id').html(idCounter);
      newRow.find('.f_Name').html($("#name-input").val()); +
      newRow.find('.l_Name').html($("#lastname-input").val());
      newRow.find('.e_mail').html($("#email-input").val());
      newRow.find('.pass_in').html($("#pass-input").val());
      newRow.find('.phone_in').html($("#phone-input").val());
      $("#my-table").find('tbody').append(newRow);
      // blank out the onputs
      $("#inputs-div").find(".contactfield").val("");
    });
    $('#my-table').on('click', '.del-row', function(event) {
      $(this).closest('.contact-row').remove();
    });
    $('#my-table').on('click', '.edit-Btn', function(event) {
      var $row = $(this).closest('.contact-row');
      var edits = $row.find('.f_Name,.l_Name,.e_mail,.pass_in,.phone_in');
      edits.each(function(index, element) {
        var inp = $("<input class='editable' type='text'/>").val($(element).text());
        $(element).html(inp);
      });
      $row.find('.edit-Btn').hide();
      $row.find('.del-Btn').hide();
      $row.find('.save-Btn').show();
    });
    $('#my-table').on('click', '.save-Btn', function(event) {
      var $row = $(this).closest('tr.contact-row');
      var edits = $row.find('.f_Name,.l_Name,.e_mail,.pass_in,.phone_in');
      edits.each(function(index, element) {
        var inp = $(element).find('input.editable');
        $(element).html(inp.val());
      });
  
      $row.find('.edit-Btn').show();
      $row.find('.del-Btn').show();
      $row.find('.save-Btn').hide();
    });
    $("#sort").on("change", function(event) {
      var pickedValue = event.target.value;
      $('#my-table').find('.first-row').find('th').eq(pickedValue).trigger('click');
      //  console.log(pickedValue);
    });
  
    $('#my-table').on('click', 'th', function() {
      var table = $(this).closest('table');
      var rows = table.find('tr.contact-row')
        .toArray()
        .sort(comparer($(this).index()));
      this.asc = !this.asc;
      if (!this.asc) {
        rows = rows.reverse();
      }
      for (var i = 0; i < rows.length; i++) {
        table.append(rows[i]);
      }
    });
  
    function comparer(index) {
      return function(a, b) {
        var valA = getCellValue(a, index),
          valB = getCellValue(b, index);
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB);
      }
    }
  
    function getCellValue(row, index) {
      return $(row).children('td').eq(index).text();
    }
  });