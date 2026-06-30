// pages/api/checkout.js
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { plan } = req.body

    // Definér produkt og priser
    const plans = {
      premium_monthly: {
        name: 'HelsAmi Premium',
        description: 'Månedlig abonnement',
        amount: 4900, // 49 kr i øre
        currency: 'nok',
        interval: 'month',
      },
    }

    const selectedPlan = plans[plan]
    if (!selectedPlan) {
      return res.status(400).json({ error: 'Invalid plan' })
    }

    // Lag Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: [
        {
          price_data: {
            currency: selectedPlan.currency,
            product_data: {
              name: selectedPlan.name,
              description: selectedPlan.description,
            },
            unit_amount: selectedPlan.amount,
            recurring: {
              interval: selectedPlan.interval,
              interval_count: 1,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/profil?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      customer_email: req.body.email || undefined,
      billing_address_collection: 'required',
      metadata: {
        plan: plan,
        userEmail: req.body.email || 'unknown',
      },
    })

    return res.status(200).json({ sessionId: session.id })
  } catch (error) {
    console.error('Stripe error:', error)
    return res.status(500).json({ error: 'Checkout failed' })
  }
}
