const ContactForm = ()=>{
    return(<>
            <form action="index.html" method="post" class="tm-contact-form">                                
                <div class="form-group">
                    <input type="text" id="contact_name" name="contact_name" class="form-control" placeholder="Name"  required/>
                </div>
                <div class="form-group">
                    <input type="email" id="contact_email" name="contact_email" class="form-control" placeholder="Email"  required/>
                </div>
                <div class="form-group">
                    <input type="text" id="contact_subject" name="contact_subject" class="form-control" placeholder="Subject"  required/>
                </div>
                <div class="form-group">
                    <textarea id="contact_message" name="contact_message" class="form-control" rows="6" placeholder="Message" required></textarea>
                </div>
            
                <button type="submit" class="tm-btn">Submit now</button>                          
            </form>
    </>);
}
export default ContactForm;