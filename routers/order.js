router.get('/orders', Auth, async (req, res) => {
    const owner = req.user._id;
    try {
        const order = await Order.find({ owner: owner }).sort({ date: -1 });
        res.status(200).send(order)
    } catch (error) {
        res.status(500).send()
    }
})