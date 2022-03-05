describe("", () => {
    it("", () => {
        let userItem
        cy.request({
            method: 'POST',
            url: 'https://www.googleapis.com/oauth2/v4/token',
            body: {
                grant_type: 'refresh_token',
                client_id: "555855212124-jpblctqg5p0fahi2m4ulrjbm90kjos51.apps.googleusercontent.com",
                client_secret: "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" ,
                refresh_token: "1//0473xuf4hTbBICgYIARAAGAQSNwF-L9IroQsQmncAjPdb0z5vU1yaxwYG0bKN3vg5O0VDleA0wVBiy_vq6WH3Ex7gMnZFXDCaQaA",
            },
            form: true
        }).then(({ body }) => {
            const { access_token, id_token } = body
            cy.log(body)

            cy.request({
                method: 'GET',
                url: 'https://www.googleapis.com/oauth2/v3/userinfo',
                headers: { Authorization: `Bearer ${access_token}` },
                form: true
            }).then(({ body }) => {
                cy.log(body)
                 userItem = {
                    token: id_token,
                    user: {
                        googleId: body.sub,
                        email: body.email,
                        givenName: body.given_name,
                        familyName: body.family_name,
                        imageUrl: body.picture,
                    },
                }
            })
        })

        window.localStorage.setItem('googleCypress', JSON.stringify(userItem))
        cy.visit('https://www.google.com')
        cy.get('.gb_3').click()
    })
})