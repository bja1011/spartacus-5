/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
export const common = {
    common: {
        cancel: 'Cancel',
        delete: 'Delete',
        remove: 'Remove',
        edit: 'Edit',
        restore: 'Restore',
        back: 'Back',
        submit: 'Submit',
        continue: 'Continue',
        save: 'Save',
        done: 'Done',
        home: 'Home',
        noData: 'No data.',
        confirm: 'Confirm',
        more: 'more',
        close: 'Close',
        loading: 'Loading',
        menu: 'Menu',
        reset: 'Reset',
        search: 'Search',
        add: 'Add',
        breadcrumbs: 'breadcrumbs',
        selectFile: 'Select file',
        clear: 'Clear',
        loaded: 'Loaded',
    },
    pageMetaResolver: {
        category: {
            title: '{{count}} result for {{query}}',
            title_other: '{{count}} results for {{query}}',
        },
        checkout: {
            title: 'Checkout',
        },
        search: {
            title: '{{count}} result for "{{query}}"',
            title_other: '{{count}} results for "{{query}}"',
            findProductTitle: '{{count}} result for coupon "{{coupon}}"',
            findProductTitle_other: '{{count}} results for coupon "{{coupon}}"',
            default_title: 'All products',
        },
        product: {
            description: '{{description}}',
            heading: '{{heading}}',
            title: '{{title}}',
        },
    },
    spinner: {
        loading: 'Loading...',
    },
    navigation: {
        categoryNavLabel: 'Category menu',
        footerNavLabel: 'Footer links',
        navigateTo: 'Navigate to {{nav}}',
        scrollToTop: 'Scroll back to the top of the page',
    },
    searchBox: {
        placeholder: 'Enter product name or SKU',
        productSearch: 'Find a product',
        ariaLabelInput: 'Search here...',
        ariaLabelSuggestions: 'typing suggestions',
        ariaLabelProducts: 'product results',
        initialDescription: 'When autocomplete results are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.',
        suggestionsResult: '{{ count }} suggestion and ',
        suggestionsResult_other: '{{ count }} suggestions and ',
        productsResult: '{{ count }} product is available.',
        productsResult_other: '{{ count }} products are available.',
        resetLabel: 'Reset Search',
        help: {
            insufficientChars: 'Please type more characters',
            noMatch: 'We could not find any results',
            exactMatch: '{{ term }}',
            empty: 'Ask us anything',
        },
    },
    sorting: {
        date: 'Date',
        orderNumber: 'Order Number',
        rma: 'Return Number',
        replenishmentNumber: 'Replenishment Number',
        nextOrderDate: 'Next Order Date',
        pageViewUpdated: 'Page view updated with your selected options.',
    },
    httpHandlers: {
        badGateway: 'A server error occurred. Please try again later.',
        badRequestPleaseLoginAgain: '{{ errorMessage }}. Please login again.',
        badRequestOldPasswordIncorrect: 'Old password incorrect.',
        badRequestGuestDuplicateEmail: '{{ errorMessage }} email already exist. Please checkout with a different email to register using a guest account.',
        conflict: 'Already exists.',
        forbidden: 'You are not authorized to perform this action. Please contact your administrator if you think this is a mistake.',
        gatewayTimeout: 'The server did not respond, please try again later.',
        internalServerError: 'An Internal Server Error occurred. Please try again later.',
        sessionExpired: 'Your session has expired. Please login again.',
        unknownError: 'An unknown error occurred',
        unauthorized: {
            common: 'An unknown authorization error occured',
            invalid_client: 'Bad client credentials',
        },
        validationErrors: {
            missing: {
                card_cardType: 'The selected credit card is not supported. Please select another.',
                card_accountNumber: 'The credit card number entered is not valid.',
                card_cvNumber: 'The security code entered is not valid.',
                card_expirationMonth: 'The credit card expiration date entered is not valid.',
                card_expirationYear: 'The credit card expiration date entered is not valid.',
                billTo_firstName: 'The first name entered is not valid.',
                billTo_lastName: 'The last name entered is not valid.',
                billTo_street1: 'The address entered is not valid.',
                billTo_street2: 'The address entered is not valid.',
                billTo_city: 'The city entered is not valid for this credit card.',
                billTo_state: 'The state/province entered is not valid for this credit card.',
                billTo_country: 'The country/region entered is not valid for this credit card.',
                billTo_postalCode: 'The zip/postal code is not valid for this credit card.',
                country: {
                    isocode: 'Missing country/region',
                },
            },
            invalid: {
                card_expirationMonth: 'The credit card expiration date entered is not valid.',
                firstName: 'First Name entered is not valid.',
                lastName: 'Last Name entered is not valid.',
                password: 'Password entered is not valid.',
                uid: 'UID is not valid.',
                code: 'Code is not valid.',
                email: 'Email is not valid.',
            },
        },
        cartNotFound: 'Cart not found.',
        invalidCodeProvided: 'Invalid code provided.',
        voucherExceeded: 'This coupon has exceeded the number of times it can be used',
        unknownIdentifier: 'Item not found.',
        otherCartErrors: 'Cart errors occurred.',
    },
    miniCart: {
        item: '{{count}} item currently in your cart',
        item_other: '{{count}} items currently in your cart',
        total: '{{total}}',
        count: '{{count}}',
    },
    skipLink: {
        skipTo: 'Skip to',
        labels: {
            header: 'Header',
            main: 'Main Content',
            footer: 'Footer',
            productFacets: 'Product Facets',
            productList: 'Product List',
        },
    },
    carousel: {
        previousSlide: 'Previous slide',
        nextSlide: 'Next slide',
        slideNumber: 'Slide {{currentSlideNumber}}',
        carouselForProduct: 'Carousel, Images for {{product}}',
    },
    formErrors: {
        globalMessage: 'The form you are trying to submit contains errors.',
        required: 'This field is required',
        cxInvalidEmail: 'This is not a valid email format',
        cxInvalidPassword: 'This is not a valid password format',
        cxPasswordsMustMatch: 'Password fields must match',
        cxEmailsMustMatch: 'Email fields must match',
        cxStarRatingEmpty: 'Rating field is required',
        cxNoSelectedItemToCancel: 'Select at least one item',
        cxNegativeAmount: 'Amount must be equal or greater than zero',
        cxContainsSpecialCharacters: 'Field cannot contain special characters',
        date: {
            required: 'This field is required',
            min: 'Date cannot be before {{min}}',
            max: 'Date cannot be after {{max}}',
            pattern: 'Use dateformat yyyy-mm-dd',
            invalid: 'Use a valid date',
        },
        file: {
            required: 'File is required',
            empty: 'File should not be empty',
            invalidExtension: 'File extension is not valid',
            tooLarge: 'File size should not exceed {{ maxSize }} MB',
            tooManyEntries: 'The number of items is greater than {{ maxEntries }}',
            notParsable: 'File is not parsable',
        },
    },
    errorHandlers: {
        scriptFailedToLoad: 'Failed to load the script.',
        refreshThePage: 'Please refresh the page.',
    },
    assistiveMessage: {
        actionCancelled: 'Action cancelled, nothing changed',
    },
    passwordVisibility: {
        showPassword: 'Show password',
        hidePassword: 'Hide password',
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXNzZXRzL3NyYy90cmFuc2xhdGlvbnMvZW4vY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUc7SUFDcEIsTUFBTSxFQUFFO1FBQ04sTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLE1BQU07UUFDWixPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLElBQUksRUFBRSxNQUFNO1FBQ1osSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE9BQU8sRUFBRSxTQUFTO1FBQ2xCLElBQUksRUFBRSxNQUFNO1FBQ1osS0FBSyxFQUFFLE9BQU87UUFDZCxPQUFPLEVBQUUsU0FBUztRQUNsQixJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxPQUFPO1FBQ2QsTUFBTSxFQUFFLFFBQVE7UUFDaEIsR0FBRyxFQUFFLEtBQUs7UUFDVixXQUFXLEVBQUUsYUFBYTtRQUMxQixVQUFVLEVBQUUsYUFBYTtRQUN6QixLQUFLLEVBQUUsT0FBTztRQUNkLE1BQU0sRUFBRSxRQUFRO0tBQ2pCO0lBQ0QsZ0JBQWdCLEVBQUU7UUFDaEIsUUFBUSxFQUFFO1lBQ1IsS0FBSyxFQUFFLGdDQUFnQztZQUN2QyxXQUFXLEVBQUUsaUNBQWlDO1NBQy9DO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsS0FBSyxFQUFFLFVBQVU7U0FDbEI7UUFDRCxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsa0NBQWtDO1lBQ3pDLFdBQVcsRUFBRSxtQ0FBbUM7WUFDaEQsZ0JBQWdC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O1lBQ0osUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixLQUFLLEVBQUUsMEJBQTBCO1lBQ2pDLGdCQUFnQixFQUFFLDZCQUE2QjtZQUMvQyxRQUFRLEVBQUUsOENBQThDO1lBQ3hELGNBQWMsRUFBRSxzREFBc0Q7WUFDdEUsV0FBVyxFQUFFLHNCQUFzQjtTQUNwQztLQUNGO0lBQ0QsYUFBYSxFQUFFO1FBQ2Isa0JBQWtCLEVBQUUsNEJBQTRCO1FBQ2hELGNBQWMsRUFBRSwwQkFBMEI7S0FDM0M7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixlQUFlLEVBQUUsbUNBQW1DO0tBQ3JEO0lBQ0Qsa0JBQWtCLEVBQUU7UUFDbEIsWUFBWSxFQUFFLGVBQWU7UUFDN0IsWUFBWSxFQUFFLGVBQWU7S0FDOUI7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuZXhwb3J0IGNvbnN0IGNvbW1vbiA9IHtcbiAgY29tbW9uOiB7XG4gICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICBkZWxldGU6ICdEZWxldGUnLFxuICAgIHJlbW92ZTogJ1JlbW92ZScsXG4gICAgZWRpdDogJ0VkaXQnLFxuICAgIHJlc3RvcmU6ICdSZXN0b3JlJyxcbiAgICBiYWNrOiAnQmFjaycsXG4gICAgc3VibWl0OiAnU3VibWl0JyxcbiAgICBjb250aW51ZTogJ0NvbnRpbnVlJyxcbiAgICBzYXZlOiAnU2F2ZScsXG4gICAgZG9uZTogJ0RvbmUnLFxuICAgIGhvbWU6ICdIb21lJyxcbiAgICBub0RhdGE6ICdObyBkYXRhLicsXG4gICAgY29uZmlybTogJ0NvbmZpcm0nLFxuICAgIG1vcmU6ICdtb3JlJyxcbiAgICBjbG9zZTogJ0Nsb3NlJyxcbiAgICBsb2FkaW5nOiAnTG9hZGluZycsXG4gICAgbWVudTogJ01lbnUnLFxuICAgIHJlc2V0OiAnUmVzZXQnLFxuICAgIHNlYXJjaDogJ1NlYXJjaCcsXG4gICAgYWRkOiAnQWRkJyxcbiAgICBicmVhZGNydW1iczogJ2JyZWFkY3J1bWJzJyxcbiAgICBzZWxlY3RGaWxlOiAnU2VsZWN0IGZpbGUnLFxuICAgIGNsZWFyOiAnQ2xlYXInLFxuICAgIGxvYWRlZDogJ0xvYWRlZCcsXG4gIH0sXG4gIHBhZ2VNZXRhUmVzb2x2ZXI6IHtcbiAgICBjYXRlZ29yeToge1xuICAgICAgdGl0bGU6ICd7e2NvdW50fX0gcmVzdWx0IGZvciB7e3F1ZXJ5fX0nLFxuICAgICAgdGl0bGVfb3RoZXI6ICd7e2NvdW50fX0gcmVzdWx0cyBmb3Ige3txdWVyeX19JyxcbiAgICB9LFxuICAgIGNoZWNrb3V0OiB7XG4gICAgICB0aXRsZTogJ0NoZWNrb3V0JyxcbiAgICB9LFxuICAgIHNlYXJjaDoge1xuICAgICAgdGl0bGU6ICd7e2NvdW50fX0gcmVzdWx0IGZvciBcInt7cXVlcnl9fVwiJyxcbiAgICAgIHRpdGxlX290aGVyOiAne3tjb3VudH19IHJlc3VsdHMgZm9yIFwie3txdWVyeX19XCInLFxuICAgICAgZmluZFByb2R1Y3RUaXRsZTogJ3t7Y291bnR9fSByZXN1bHQgZm9yIGNvdXBvbiBcInt7Y291cG9ufX1cIicsXG4gICAgICBmaW5kUHJvZHVjdFRpdGxlX290aGVyOiAne3tjb3VudH19IHJlc3VsdHMgZm9yIGNvdXBvbiBcInt7Y291cG9ufX1cIicsXG4gICAgICBkZWZhdWx0X3RpdGxlOiAnQWxsIHByb2R1Y3RzJyxcbiAgICB9LFxuICAgIHByb2R1Y3Q6IHtcbiAgICAgIGRlc2NyaXB0aW9uOiAne3tkZXNjcmlwdGlvbn19JyxcbiAgICAgIGhlYWRpbmc6ICd7e2hlYWRpbmd9fScsXG4gICAgICB0aXRsZTogJ3t7dGl0bGV9fScsXG4gICAgfSxcbiAgfSxcbiAgc3Bpbm5lcjoge1xuICAgIGxvYWRpbmc6ICdMb2FkaW5nLi4uJyxcbiAgfSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIGNhdGVnb3J5TmF2TGFiZWw6ICdDYXRlZ29yeSBtZW51JyxcbiAgICBmb290ZXJOYXZMYWJlbDogJ0Zvb3RlciBsaW5rcycsXG4gICAgbmF2aWdhdGVUbzogJ05hdmlnYXRlIHRvIHt7bmF2fX0nLFxuICAgIHNjcm9sbFRvVG9wOiAnU2Nyb2xsIGJhY2sgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZScsXG4gIH0sXG4gIHNlYXJjaEJveDoge1xuICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgcHJvZHVjdCBuYW1lIG9yIFNLVScsXG4gICAgcHJvZHVjdFNlYXJjaDogJ0ZpbmQgYSBwcm9kdWN0JyxcbiAgICBhcmlhTGFiZWxJbnB1dDogJ1NlYXJjaCBoZXJlLi4uJyxcbiAgICBhcmlhTGFiZWxTdWdnZXN0aW9uczogJ3R5cGluZyBzdWdnZXN0aW9ucycsXG4gICAgYXJpYUxhYmVsUHJvZHVjdHM6ICdwcm9kdWN0IHJlc3VsdHMnLFxuICAgIGluaXRpYWxEZXNjcmlwdGlvbjpcbiAgICAgICdXaGVuIGF1dG9jb21wbGV0ZSByZXN1bHRzIGFyZSBhdmFpbGFibGUgdXNlIHVwIGFuZCBkb3duIGFycm93cyB0byByZXZpZXcgYW5kIGVudGVyIHRvIHNlbGVjdC4gVG91Y2ggZGV2aWNlIHVzZXJzLCBleHBsb3JlIGJ5IHRvdWNoIG9yIHdpdGggc3dpcGUgZ2VzdHVyZXMuJyxcbiAgICBzdWdnZXN0aW9uc1Jlc3VsdDogJ3t7IGNvdW50IH19IHN1Z2dlc3Rpb24gYW5kICcsXG4gICAgc3VnZ2VzdGlvbnNSZXN1bHRfb3RoZXI6ICd7eyBjb3VudCB9fSBzdWdnZXN0aW9ucyBhbmQgJyxcbiAgICBwcm9kdWN0c1Jlc3VsdDogJ3t7IGNvdW50IH19IHByb2R1Y3QgaXMgYXZhaWxhYmxlLicsXG4gICAgcHJvZHVjdHNSZXN1bHRfb3RoZXI6ICd7eyBjb3VudCB9fSBwcm9kdWN0cyBhcmUgYXZhaWxhYmxlLicsXG4gICAgcmVzZXRMYWJlbDogJ1Jlc2V0IFNlYXJjaCcsXG4gICAgaGVscDoge1xuICAgICAgaW5zdWZmaWNpZW50Q2hhcnM6ICdQbGVhc2UgdHlwZSBtb3JlIGNoYXJhY3RlcnMnLFxuICAgICAgbm9NYXRjaDogJ1dlIGNvdWxkIG5vdCBmaW5kIGFueSByZXN1bHRzJyxcbiAgICAgIGV4YWN0TWF0Y2g6ICd7eyB0ZXJtIH19JyxcbiAgICAgIGVtcHR5OiAnQXNrIHVzIGFueXRoaW5nJyxcbiAgICB9LFxuICB9LFxuICBzb3J0aW5nOiB7XG4gICAgZGF0ZTogJ0RhdGUnLFxuICAgIG9yZGVyTnVtYmVyOiAnT3JkZXIgTnVtYmVyJyxcbiAgICBybWE6ICdSZXR1cm4gTnVtYmVyJyxcbiAgICByZXBsZW5pc2htZW50TnVtYmVyOiAnUmVwbGVuaXNobWVudCBOdW1iZXInLFxuICAgIG5leHRPcmRlckRhdGU6ICdOZXh0IE9yZGVyIERhdGUnLFxuICAgIHBhZ2VWaWV3VXBkYXRlZDogJ1BhZ2UgdmlldyB1cGRhdGVkIHdpdGggeW91ciBzZWxlY3RlZCBvcHRpb25zLicsXG4gIH0sXG4gIGh0dHBIYW5kbGVyczoge1xuICAgIGJhZEdhdGV3YXk6ICdBIHNlcnZlciBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLFxuICAgIGJhZFJlcXVlc3RQbGVhc2VMb2dpbkFnYWluOiAne3sgZXJyb3JNZXNzYWdlIH19LiBQbGVhc2UgbG9naW4gYWdhaW4uJyxcbiAgICBiYWRSZXF1ZXN0T2xkUGFzc3dvcmRJbmNvcnJlY3Q6ICdPbGQgcGFzc3dvcmQgaW5jb3JyZWN0LicsXG4gICAgYmFkUmVxdWVzdEd1ZXN0RHVwbGljYXRlRW1haWw6XG4gICAgICAne3sgZXJyb3JNZXNzYWdlIH19IGVtYWlsIGFscmVhZHkgZXhpc3QuIFBsZWFzZSBjaGVja291dCB3aXRoIGEgZGlmZmVyZW50IGVtYWlsIHRvIHJlZ2lzdGVyIHVzaW5nIGEgZ3Vlc3QgYWNjb3VudC4nLFxuICAgIGNvbmZsaWN0OiAnQWxyZWFkeSBleGlzdHMuJyxcbiAgICBmb3JiaWRkZW46XG4gICAgICAnWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBwZXJmb3JtIHRoaXMgYWN0aW9uLiBQbGVhc2UgY29udGFjdCB5b3VyIGFkbWluaXN0cmF0b3IgaWYgeW91IHRoaW5rIHRoaXMgaXMgYSBtaXN0YWtlLicsXG4gICAgZ2F0ZXdheVRpbWVvdXQ6ICdUaGUgc2VydmVyIGRpZCBub3QgcmVzcG9uZCwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4nLFxuICAgIGludGVybmFsU2VydmVyRXJyb3I6XG4gICAgICAnQW4gSW50ZXJuYWwgU2VydmVyIEVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLicsXG4gICAgc2Vzc2lvbkV4cGlyZWQ6ICdZb3VyIHNlc3Npb24gaGFzIGV4cGlyZWQuIFBsZWFzZSBsb2dpbiBhZ2Fpbi4nLFxuICAgIHVua25vd25FcnJvcjogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQnLFxuICAgIHVuYXV0aG9yaXplZDoge1xuICAgICAgY29tbW9uOiAnQW4gdW5rbm93biBhdXRob3JpemF0aW9uIGVycm9yIG9jY3VyZWQnLFxuICAgICAgaW52YWxpZF9jbGllbnQ6ICdCYWQgY2xpZW50IGNyZWRlbnRpYWxzJyxcbiAgICB9LFxuICAgIHZhbGlkYXRpb25FcnJvcnM6IHtcbiAgICAgIG1pc3Npbmc6IHtcbiAgICAgICAgY2FyZF9jYXJkVHlwZTpcbiAgICAgICAgICAnVGhlIHNlbGVjdGVkIGNyZWRpdCBjYXJkIGlzIG5vdCBzdXBwb3J0ZWQuIFBsZWFzZSBzZWxlY3QgYW5vdGhlci4nLFxuICAgICAgICBjYXJkX2FjY291bnROdW1iZXI6ICdUaGUgY3JlZGl0IGNhcmQgbnVtYmVyIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGNhcmRfY3ZOdW1iZXI6ICdUaGUgc2VjdXJpdHkgY29kZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBjYXJkX2V4cGlyYXRpb25Nb250aDpcbiAgICAgICAgICAnVGhlIGNyZWRpdCBjYXJkIGV4cGlyYXRpb24gZGF0ZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBjYXJkX2V4cGlyYXRpb25ZZWFyOlxuICAgICAgICAgICdUaGUgY3JlZGl0IGNhcmQgZXhwaXJhdGlvbiBkYXRlIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGJpbGxUb19maXJzdE5hbWU6ICdUaGUgZmlyc3QgbmFtZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBiaWxsVG9fbGFzdE5hbWU6ICdUaGUgbGFzdCBuYW1lIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGJpbGxUb19zdHJlZXQxOiAnVGhlIGFkZHJlc3MgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgYmlsbFRvX3N0cmVldDI6ICdUaGUgYWRkcmVzcyBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBiaWxsVG9fY2l0eTogJ1RoZSBjaXR5IGVudGVyZWQgaXMgbm90IHZhbGlkIGZvciB0aGlzIGNyZWRpdCBjYXJkLicsXG4gICAgICAgIGJpbGxUb19zdGF0ZTpcbiAgICAgICAgICAnVGhlIHN0YXRlL3Byb3ZpbmNlIGVudGVyZWQgaXMgbm90IHZhbGlkIGZvciB0aGlzIGNyZWRpdCBjYXJkLicsXG4gICAgICAgIGJpbGxUb19jb3VudHJ5OlxuICAgICAgICAgICdUaGUgY291bnRyeS9yZWdpb24gZW50ZXJlZCBpcyBub3QgdmFsaWQgZm9yIHRoaXMgY3JlZGl0IGNhcmQuJyxcbiAgICAgICAgYmlsbFRvX3Bvc3RhbENvZGU6XG4gICAgICAgICAgJ1RoZSB6aXAvcG9zdGFsIGNvZGUgaXMgbm90IHZhbGlkIGZvciB0aGlzIGNyZWRpdCBjYXJkLicsXG4gICAgICAgIGNvdW50cnk6IHtcbiAgICAgICAgICBpc29jb2RlOiAnTWlzc2luZyBjb3VudHJ5L3JlZ2lvbicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgaW52YWxpZDoge1xuICAgICAgICBjYXJkX2V4cGlyYXRpb25Nb250aDpcbiAgICAgICAgICAnVGhlIGNyZWRpdCBjYXJkIGV4cGlyYXRpb24gZGF0ZSBlbnRlcmVkIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBmaXJzdE5hbWU6ICdGaXJzdCBOYW1lIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIGxhc3ROYW1lOiAnTGFzdCBOYW1lIGVudGVyZWQgaXMgbm90IHZhbGlkLicsXG4gICAgICAgIHBhc3N3b3JkOiAnUGFzc3dvcmQgZW50ZXJlZCBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgdWlkOiAnVUlEIGlzIG5vdCB2YWxpZC4nLFxuICAgICAgICBjb2RlOiAnQ29kZSBpcyBub3QgdmFsaWQuJyxcbiAgICAgICAgZW1haWw6ICdFbWFpbCBpcyBub3QgdmFsaWQuJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjYXJ0Tm90Rm91bmQ6ICdDYXJ0IG5vdCBmb3VuZC4nLFxuICAgIGludmFsaWRDb2RlUHJvdmlkZWQ6ICdJbnZhbGlkIGNvZGUgcHJvdmlkZWQuJyxcbiAgICB2b3VjaGVyRXhjZWVkZWQ6XG4gICAgICAnVGhpcyBjb3Vwb24gaGFzIGV4Y2VlZGVkIHRoZSBudW1iZXIgb2YgdGltZXMgaXQgY2FuIGJlIHVzZWQnLFxuICAgIHVua25vd25JZGVudGlmaWVyOiAnSXRlbSBub3QgZm91bmQuJyxcbiAgICBvdGhlckNhcnRFcnJvcnM6ICdDYXJ0IGVycm9ycyBvY2N1cnJlZC4nLFxuICB9LFxuICBtaW5pQ2FydDoge1xuICAgIGl0ZW06ICd7e2NvdW50fX0gaXRlbSBjdXJyZW50bHkgaW4geW91ciBjYXJ0JyxcbiAgICBpdGVtX290aGVyOiAne3tjb3VudH19IGl0ZW1zIGN1cnJlbnRseSBpbiB5b3VyIGNhcnQnLFxuICAgIHRvdGFsOiAne3t0b3RhbH19JyxcbiAgICBjb3VudDogJ3t7Y291bnR9fScsXG4gIH0sXG4gIHNraXBMaW5rOiB7XG4gICAgc2tpcFRvOiAnU2tpcCB0bycsXG4gICAgbGFiZWxzOiB7XG4gICAgICBoZWFkZXI6ICdIZWFkZXInLFxuICAgICAgbWFpbjogJ01haW4gQ29udGVudCcsXG4gICAgICBmb290ZXI6ICdGb290ZXInLFxuICAgICAgcHJvZHVjdEZhY2V0czogJ1Byb2R1Y3QgRmFjZXRzJyxcbiAgICAgIHByb2R1Y3RMaXN0OiAnUHJvZHVjdCBMaXN0JyxcbiAgICB9LFxuICB9LFxuICBjYXJvdXNlbDoge1xuICAgIHByZXZpb3VzU2xpZGU6ICdQcmV2aW91cyBzbGlkZScsXG4gICAgbmV4dFNsaWRlOiAnTmV4dCBzbGlkZScsXG4gICAgc2xpZGVOdW1iZXI6ICdTbGlkZSB7e2N1cnJlbnRTbGlkZU51bWJlcn19JyxcbiAgICBjYXJvdXNlbEZvclByb2R1Y3Q6ICdDYXJvdXNlbCwgSW1hZ2VzIGZvciB7e3Byb2R1Y3R9fScsXG4gIH0sXG4gIGZvcm1FcnJvcnM6IHtcbiAgICBnbG9iYWxNZXNzYWdlOiAnVGhlIGZvcm0geW91IGFyZSB0cnlpbmcgdG8gc3VibWl0IGNvbnRhaW5zIGVycm9ycy4nLFxuICAgIHJlcXVpcmVkOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgY3hJbnZhbGlkRW1haWw6ICdUaGlzIGlzIG5vdCBhIHZhbGlkIGVtYWlsIGZvcm1hdCcsXG4gICAgY3hJbnZhbGlkUGFzc3dvcmQ6ICdUaGlzIGlzIG5vdCBhIHZhbGlkIHBhc3N3b3JkIGZvcm1hdCcsXG4gICAgY3hQYXNzd29yZHNNdXN0TWF0Y2g6ICdQYXNzd29yZCBmaWVsZHMgbXVzdCBtYXRjaCcsXG4gICAgY3hFbWFpbHNNdXN0TWF0Y2g6ICdFbWFpbCBmaWVsZHMgbXVzdCBtYXRjaCcsXG4gICAgY3hTdGFyUmF0aW5nRW1wdHk6ICdSYXRpbmcgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgIGN4Tm9TZWxlY3RlZEl0ZW1Ub0NhbmNlbDogJ1NlbGVjdCBhdCBsZWFzdCBvbmUgaXRlbScsXG4gICAgY3hOZWdhdGl2ZUFtb3VudDogJ0Ftb3VudCBtdXN0IGJlIGVxdWFsIG9yIGdyZWF0ZXIgdGhhbiB6ZXJvJyxcbiAgICBjeENvbnRhaW5zU3BlY2lhbENoYXJhY3RlcnM6ICdGaWVsZCBjYW5ub3QgY29udGFpbiBzcGVjaWFsIGNoYXJhY3RlcnMnLFxuICAgIGRhdGU6IHtcbiAgICAgIHJlcXVpcmVkOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICBtaW46ICdEYXRlIGNhbm5vdCBiZSBiZWZvcmUge3ttaW59fScsXG4gICAgICBtYXg6ICdEYXRlIGNhbm5vdCBiZSBhZnRlciB7e21heH19JyxcbiAgICAgIHBhdHRlcm46ICdVc2UgZGF0ZWZvcm1hdCB5eXl5LW1tLWRkJyxcbiAgICAgIGludmFsaWQ6ICdVc2UgYSB2YWxpZCBkYXRlJyxcbiAgICB9LFxuICAgIGZpbGU6IHtcbiAgICAgIHJlcXVpcmVkOiAnRmlsZSBpcyByZXF1aXJlZCcsXG4gICAgICBlbXB0eTogJ0ZpbGUgc2hvdWxkIG5vdCBiZSBlbXB0eScsXG4gICAgICBpbnZhbGlkRXh0ZW5zaW9uOiAnRmlsZSBleHRlbnNpb24gaXMgbm90IHZhbGlkJyxcbiAgICAgIHRvb0xhcmdlOiAnRmlsZSBzaXplIHNob3VsZCBub3QgZXhjZWVkIHt7IG1heFNpemUgfX0gTUInLFxuICAgICAgdG9vTWFueUVudHJpZXM6ICdUaGUgbnVtYmVyIG9mIGl0ZW1zIGlzIGdyZWF0ZXIgdGhhbiB7eyBtYXhFbnRyaWVzIH19JyxcbiAgICAgIG5vdFBhcnNhYmxlOiAnRmlsZSBpcyBub3QgcGFyc2FibGUnLFxuICAgIH0sXG4gIH0sXG4gIGVycm9ySGFuZGxlcnM6IHtcbiAgICBzY3JpcHRGYWlsZWRUb0xvYWQ6ICdGYWlsZWQgdG8gbG9hZCB0aGUgc2NyaXB0LicsXG4gICAgcmVmcmVzaFRoZVBhZ2U6ICdQbGVhc2UgcmVmcmVzaCB0aGUgcGFnZS4nLFxuICB9LFxuICBhc3Npc3RpdmVNZXNzYWdlOiB7XG4gICAgYWN0aW9uQ2FuY2VsbGVkOiAnQWN0aW9uIGNhbmNlbGxlZCwgbm90aGluZyBjaGFuZ2VkJyxcbiAgfSxcbiAgcGFzc3dvcmRWaXNpYmlsaXR5OiB7XG4gICAgc2hvd1Bhc3N3b3JkOiAnU2hvdyBwYXNzd29yZCcsXG4gICAgaGlkZVBhc3N3b3JkOiAnSGlkZSBwYXNzd29yZCcsXG4gIH0sXG59O1xuIl19