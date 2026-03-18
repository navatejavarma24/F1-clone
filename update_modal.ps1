$dir = "c:\Users\navateja varma\Downloads\ag\projects"
$files = Get-ChildItem -Path $dir -Filter "*.html"

$newModal = @"
    <div id="payment-modal" class="modal-overlay">
        <div class="modal-container payment-container" style="max-width: 800px;">
            <button class="modal-close" id="close-payment">&times;</button>
            <div class="modal-left payment-left" style="flex: 1.2; padding: 40px; display: flex; flex-direction: column; gap: 20px;">
                <h2 style="margin-bottom: 0;">Premium Pass</h2>
                <p style="margin-top: 0; margin-bottom: 10px;">Select a subscription plan</p>
                
                <div class="subscription-plans">
                    <div class="plan-card" data-price="99">
                        <div class="plan-name">Weekly</div>
                        <div class="plan-price">₹99</div>
                        <div class="plan-desc">7 days access</div>
                    </div>
                    <div class="plan-card active-plan" data-price="199">
                        <div class="plan-name">Monthly</div>
                        <div class="plan-price">₹199</div>
                        <div class="plan-desc">30 days access</div>
                    </div>
                    <div class="plan-card" data-price="1499">
                        <div class="plan-name">Yearly</div>
                        <div class="plan-price">₹1499</div>
                        <div class="plan-desc">365 days access</div>
                    </div>
                </div>
                
                <ul class="perk-list" style="margin-top: auto;">
                    <li>✓ 1080p Live Streaming</li>
                    <li>✓ Multi-cam Angles</li>
                    <li>✓ Live Driver Tracker</li>
                    <li>✓ Ad-free experience</li>
                </ul>
            </div>
            <div class="modal-right" style="flex: 1;">
                <form id="payment-form" class="auth-form active-form">
                    <h3>Payment Details</h3>
                    <div class="input-group">
                        <label for="card-name">Name on Card</label>
                        <input type="text" id="card-name" placeholder="John Doe" required>
                    </div>
                    <div class="input-group">
                        <label for="card-num">Card Number</label>
                        <input type="text" id="card-num" placeholder="0000 0000 0000 0000" maxlength="19" required>
                    </div>
                    <div class="payment-row">
                        <div class="input-group half">
                            <label for="card-exp">Expiry (MM/YY)</label>
                            <input type="text" id="card-exp" placeholder="MM/YY" maxlength="5" required>
                        </div>
                        <div class="input-group half">
                            <label for="card-cvv">CVV</label>
                            <input type="password" id="card-cvv" placeholder="123" maxlength="4" required>
                        </div>
                    </div>
                    <button type="submit" class="btn-auth" id="pay-btn">Pay ₹199</button>
                    <p class="secure-checkout">🔒 Secure 256-bit Encryption</p>
                </form>
            </div>
        </div>
    </div>
"@

foreach ($file in $files) {
    if ($file.Name -match "standings.html|live.html") { continue }
    $content = Get-Content -Raw $file.FullName
    if ($content -match 'id="payment(&#45;|-)modal"') {
        # Replace up to auth-modal block
        $content = $content -replace '(?s)<div id="payment(&#45;|-)modal".*?(?=<div id="auth(&#45;|-)modal")', "$newModal`n`n    "
        Set-Content -Path $file.FullName -Value $content -NoNewline
        Write-Host "Replaced modal in $($file.Name)"
    }
}
