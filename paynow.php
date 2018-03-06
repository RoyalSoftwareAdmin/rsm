<?php
session_start();
$MERCHANT_KEY = "xdd2aUfG";
$SALT = "BU7uUAVtr4";
$PAYU_BASE_URL = "https://secure.payu.in/_payment";
$action = '';
$posted = array();
if(!empty($_POST)) {
  foreach($_POST as $key => $value) {    
    $posted[$key] = $value; 
  }
}

$formError = 0;

if(empty($posted['txnid'])) {
  $txnid = "Madhu28071991";//substr(hash('sha256', mt_rand() . microtime()), 0, 20);
} else {
  $txnid = $posted['txnid'];
}
$hash = '';
$hashSequence = "key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10";
if(empty($posted['hash']) && sizeof($posted) > 0) {
  if(
          empty($posted['key'])
          || empty($posted['txnid'])
          || empty($posted['amount'])
          || empty($posted['firstname'])
          || empty($posted['email'])
          || empty($posted['phone'])
          || empty($posted['productinfo'])
          || empty($posted['surl'])
          || empty($posted['furl'])
      || empty($posted['service_provider'])
  ) {
    $formError = 1;
  } else {
    $hashVarsSeq = explode('|', $hashSequence);
    $hash_string = '';  
  foreach($hashVarsSeq as $hash_var) {
      $hash_string .= isset($posted[$hash_var]) ? $posted[$hash_var] : '';
      $hash_string .= '|';
    }
    $hash_string .= $SALT;
    $hash = strtolower(hash('sha512', $hash_string));
    $action = $PAYU_BASE_URL . '/_payment';
  }
} elseif(!empty($posted['hash'])) {
  $hash = $posted['hash'];
  $action = $PAYU_BASE_URL . '/_payment';
}
?>
<html>
  <head>
    <title>Royal Skills Masters </title>
      
      <script>
        var hash = '<?php echo $hash ?>';
        function submitPayuForm() {
          if(hash == '') {
            return;
          }
          var payuForm = document.forms.payuForm;
          payuForm.submit();
        }
      </script>
      <style type="text/css">
        .modal-content{
          width: 100%;
          margin: 0%;
        }
        .modal-dialog{
          width: 100%;
          left: 0px;
          margin: 0px;
        }
        form{
          width: 65%;
          margin: 0px;
        }
        input#submit{
          width: 30%;
          margin: 10% 30%;
        }
        .modal{
          padding: 0px;
        }
      </style>
  </head>
  <body onload="submitPayuForm()">
    
    <div class="container">
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
         <!-- Modal content-->
         <!-- payment Modal start here-->
          <div class="modal-content">
          <div class="modal-header">
            <h2> Welcome <?php echo $_SESSION["login_user"] ?> ! Please Enter All The Details</h2>
              <br/>
              <?php if($formError) { ?>
            
                <span style="color:red">Please fill all mandatory fields.</span>
                <br/>
                <br/>
              <?php } ?>
          </div>
          <div class="modal-body">
      <form action="<?php echo $action; ?>" method="post" name="payuForm">
        <input type="hidden" name="key" value="<?php echo $MERCHANT_KEY ?>" />
        <input type="hidden" name="hash" value="<?php echo $hash ?>"/>
        <input type="hidden" name="txnid" value="<?php echo $txnid ?>" />
        <textarea style="display: none;" name="productinfo">Jewel EMI</textarea>
        <input type="hidden" name="surl" value="http://www.saleinmysore.com/Jewels/success.php" size="64" />
        <input type="hidden" name="furl" value="http://www.saleinmysore.com/Jewels/success.php" size="64" />
        <input type="hidden" name="service_provider" value="payu_paisa" size="64" />
        <input type="hidden" name="curl" value="http://www.saleinmysore.com/Jewels/cancel.php" />
        <div class="form-group">
          <label for="usr">First Name:</label>
          <input name="firstname" id="firstname" value="<?php echo (empty($posted['firstname'])) ? '' : $posted['firstname']; ?>" />
        </div> 

        <div class="form-group">
          <label for="usr">Last Name:</label>
          <input name="lastname" id="lastname" value="<?php echo (empty($posted['lastname'])) ? '' : $posted['lastname']; ?>" />
        </div> 

         <div class="form-group">
          <label for="usr">Email:</label>
          <input name="email" id="email" value="<?php echo (empty($posted['email'])) ? '' : $posted['email']; ?>" />
        </div> 

         <div class="form-group">
          <label for="usr">Phone:</label>
          <input name="phone" value="<?php echo (empty($posted['phone'])) ? '' : $posted['phone']; ?>" /></td>
        </div> 

         <div style="display:none;" class="form-group">
          <label for="usr">Address 1:</label>
          <input name="address1" value="<?php echo (empty($posted['address1'])) ? '' : $posted['address1']; ?>" />
        </div> 

         <div style="display:none;" class="form-group">
          <label for="usr">Address 2:</label>
          <input name="address2" value="<?php echo (empty($posted['address2'])) ? '' : $posted['address2']; ?>" />
        </div> 

         <div style="display:none;" class="form-group">
          <label for="usr">City:</label>
          <input name="city" value="<?php echo (empty($posted['city'])) ? '' : $posted['city']; ?>" />
        </div> 

         <div style="display:none;" class="form-group">
          <label for="usr">State:</label>
          <input name="state" value="<?php echo (empty($posted['state'])) ? '' : $posted['state']; ?>" />
        </div> 

         <div style="display:none;" class="form-group">
          <label for="usr">Pincode:</label>
          <input name="zipcode" value="<?php echo (empty($posted['zipcode'])) ? '' : $posted['zipcode']; ?>" />
        </div> 

        <div class="form-group">
          <label for="usr">Amount:</label>
          <input name="amount" value="<?php echo (empty($posted['amount'])) ? '' : $posted['amount'] ?>" />
        </div> 

            <?php if(!$hash) { ?>
             <div class="form-group col-md-6">
                <input name="Submit" type="submit" value="Submit" />
            </div> 
            <div class="form-group col-md-6">
                <input name="Cancel" type="cancel" value="Cancel" />
            </div> 
            <?php } ?>
          </tr>
        </table>
      </form>
      </div>
     </div>
      
    </div>
    </div>
  </body>
</html>
