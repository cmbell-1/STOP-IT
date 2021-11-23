// instructions page 1
var page1 = [
  '<p> Your main task is to respond to the arrows that appear on the screen.</p> '+
  '<p> The objective of this task is to react to the arrows that appear on the screen as quickly as possible. If the arrow points left, press the LEFT ARROW KEY on your keyboard. If the arrow points right, press the RIGHT ARROW KEY on your keyboard. </p>'+
  '<p >When the task begins, place your left index finger on the left arrow on your keyboard, and your right index finger on the right arrow. </p>'+ '<br>' +
  '<p> If the arrow turns RED, do NOT press any keys on your keyboard. Sometimes the arrow will turn red right away and other times it will take longer.  </p>'+
  '<p> Nevertheless, if you wait too long the task will time out and your response will be scored as incorrect.  </p>'
];

// instructions page 2
// Do not forget to adjust the number of blocks
page2 = [
  '<p> We will start with a short practice block in which you will receive immediate feedback informing you of correct and timely responses or incorrect responses. In the test rounds, you will no longer receive immediate feedback.  </p>'+
  '<p> After the practice block, there will be 3 test blocks. At the end of each test block, there will be a 15 second break during which you will receive feedback about your average performance in the previous block. </p>'
];

// informed consent text
var informed_consent_text = [
  '<p> Type your informed consent text in the text_variables.js file... </p>'
];

// trial by trial feedback messages
correct_msg = '<p> correct response </p>'
incorrect_msg = '<p> incorrect response </p>'
too_slow_msg = '<p> too slow </p>'
too_fast_msg = '<p> too fast </p>'
correct_stop_msg = '<p> correct stop </p>'
incorrect_stop_msg = '<p> remember: try to stop </p>'

// block feedback
no_signal_header = "<p><b>GO TRIALS: </b></p>"
avg_rt_msg = "<p>Average response time = %d milliseconds</p>"
prop_miss_msg = "<p>Proportion missed go = %.2f (should be 0)</p>"
stop_signal_header = "<p><b>STOP-SIGNAL TRIALS: </b></p>"
prop_corr_msg = "<p>Proportion correct stops = %.2f (should be close to 0.5)</p>" + "<br>"
next_block_msg = "<p>You can take a short break, the next block starts in <span id='timer'>15</span></p>"
final_block_msg = "<p>Press space to continue...</p>" // after the final block they don't need a break

// other
var label_previous_button = 'Previous';
var label_next_button = 'Next';
var label_consent_button = 'I agree';
var full_screen_message = '<p>The experiment will switch to fullscreen mode when you push the button below. </p>';
var welcome_message = ['<p>Welcome to the experiment.</p>' + '<p>Press "Next" to begin.</p>'];
var not_supported_message = ['<p>This experiment requires the Chrome or Firefox webbrowser.</p>'];
var subjID_instructions = "Enter your participant ID."
var age_instructions = "Enter your age."
var gender_instructions = "Choose your gender."
var gender_options = ['Female','Male', 'Other', 'Prefer not to say']
var text_at_start_block = '<p>Press space to begin.</p>'
var get_ready_message = '<p>Get ready...</p>'
var fixation_text = '<div style="font-size:60px;">TEST</div>'
var end_message = "<p>Thank you for your participation.</p>" +
  "<p>Press space to finalize the experiment.</p>"
