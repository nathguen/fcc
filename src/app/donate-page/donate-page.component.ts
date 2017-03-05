import { Component } from '@angular/core';

@Component({
    templateUrl: 'donate-page.component.html'
})

export class DonatePageComponent {
    model: any = {
        phone: '',
        donorName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        amount: 0
    };

    // ngOnInit() {
    //     paypal.Button.render({
    //         env: 'sandbox', // Optional: specify 'sandbox' environment
    //         client: {
    //             sandbox: 'AVwRmvqvNAe3j9pKNJayNsxMJLoSTxKR5vPgleoRtUN0J4Xqma9cha83WmmDC6ZnxUDSYbeSx3wP76ms',
    //             production: 'Ae5rZ_8R_F2t3iWUJK9XHBDn78sO-bnGjfEZV5WJX2FRuerioF0_gHrCARLbGS5CFs1p4CqE6I9_Ygj4'
    //         },
    //         payment: function () {
    //             var env = this.props.env;
    //             var client = this.props.client;
    //             return paypal.rest.payment.create(env, client, {
    //                 transactions: [
    //                     {
    //                         amount: { total: '25.00', currency: 'USD' }
    //                     }
    //                 ]
    //             });
    //         },
    //         commit: true, // Optional: show a 'Pay Now' button in the checkout flow
    //         onAuthorize: function (data, actions) {
    //             // Optional: display a confirmation page here
    //             return actions.payment.execute().then(function () {
    //                 // Show a success page to the buyer
    //             });
    //         }
    //     }, '#paypal-button');
    // }

    phoneRegex = new RegExp('0-9\-');

    phoneInputFocused() {
        if (this.model.phone === undefined || this.model.phone.length === 0) {
            this.model.phone = '(';
        }
    }

    phoneInputBlurred() {
        if (this.model.phone !== undefined && this.model.phone.length === 1) {
            this.model.phone = '';
        }
    }

    phoneInputChange() {
        if (this.model.phone !== undefined && this.model.phone.length) {
            // strip out all alpha chars first
            var nums = this.model.phone.replace(/\D/g, '');

            // TODO rebuild phone string
            this.model.phone = '(';
            if (nums.length > 2) {
                this.model.phone += nums.substring(0, 3) + ')-';
            }
            if (nums.length > 5) {
                this.model.phone += nums.substring(3, 6) + '-';
            }
        }
    }

    submitDonation() {
        // @TODO contact service
    }
}