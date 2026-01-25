---
title: Contact
---
<style>
.contact-section {
  max-width: 600px;
}

.contact-intro {
  margin-bottom: 1.5rem;
}

.contact-title {
  font-family: var(--headerFont);
  color: var(--dark);
  font-size: 1.4rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.contact-description {
  color: var(--darkgray);
  margin: 0;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-label {
  font-family: var(--bodyFont);
  font-weight: 600;
  color: var(--dark);
  font-size: 0.9rem;
}

.form-input,
.form-textarea {
  font-family: var(--bodyFont);
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--lightgray);
  border-radius: 5px;
  background-color: var(--light);
  color: var(--darkgray);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--secondary);
  box-shadow: 0 0 0 3px var(--highlight);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--gray);
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

.form-submit {
  font-family: var(--bodyFont);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  background-color: var(--secondary);
  color: var(--light);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  align-self: flex-start;
}

.form-submit:hover {
  background-color: var(--tertiary);
}

.form-submit:active {
  transform: scale(0.98);
}
</style>

<section class="contact-section">
  <div class="contact-intro">
    <h2 class="contact-title">Get in touch</h2>
    <p class="contact-description">
      Fill out the form below and I'll get back to you as soon as possible.
    </p>
  </div>

  <form class="contact-form" action="https://api.web3forms.com/submit" method="POST">

    <input type="hidden" name="access_key" value="98885db0-631f-4540-8f05-97902fa66a38" />
    <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
    <input type="hidden" name="from_name" value="My Website" />
    <!-- More customization options available in the docs: https://docs.web3forms.com -->

    <div class="form-group-container">
      <div class="form-group">
        <label for="name" class="form-label">Name</label>
        <input id="name" name="name" class="form-input" placeholder="Your name" type="text" />
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input id="email" name="email" class="form-input" placeholder="Your email" type="email" />
      </div>
      <div class="form-group">
        <label for="phone" class="form-label">Phone</label>
        <input id="phone" name="phone" class="form-input" placeholder="+1 (234) 56789" type="text" />
      </div>
      <div class="form-group">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-textarea" id="message" name="message" placeholder="Your message"></textarea>
      </div>
    </div>
    <button class="form-submit" type="submit">Send Message</button>
  </form>

</section>

## Speaking & workshops

I'm available for speaking engagements, workshops, and consultations on topics related to:

- Digital scholarship and networked thinking
- Knowledge management and personal learning systems
- Academic writing and publishing

To inquire about availability, please use the form above.

