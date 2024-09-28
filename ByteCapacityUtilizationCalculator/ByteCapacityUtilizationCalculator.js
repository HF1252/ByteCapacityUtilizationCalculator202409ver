function calculate() {
    // 最大容量と現在使用済容量を取得し、バイト数に変換
    const maxCapacity = parseFloat(document.getElementById('maxCapacity').value) * parseFloat(document.getElementById('maxUnit').value);
    const usedCapacity = parseFloat(document.getElementById('usedCapacity').value) * parseFloat(document.getElementById('usedUnit').value);
    
    // 入力値のチェック
    if (maxCapacity <= 0 || usedCapacity < 0) {
        alert("正しい値を入力してください。"); // エラーメッセージ表示
        return; // 処理を終了
    }

    // 未使用容量を計算
    const unusedCapacity = maxCapacity - usedCapacity;

    // 使用率・未使用率計算
    const usageRate = (usedCapacity / maxCapacity) * 100; // 使用率
    const unusedRate = (unusedCapacity / maxCapacity) * 100; // 未使用率

    // 使用割合・未使用割合計算
    const usageFraction = (usedCapacity / maxCapacity); // 使用割合
    const unusedFraction = (unusedCapacity / maxCapacity); // 未使用割合

    // バイト数表示用オブジェクト作成
    const usedBytes = {
        B: usedCapacity,
        KB: usedCapacity / 1024,
        MB: usedCapacity / (1024 ** 2),
        GB: usedCapacity / (1024 ** 3),
        TB: usedCapacity / (1024 ** 4),
    };

    const unusedBytes = {
        B: unusedCapacity,
        KB: unusedCapacity / 1024,
        MB: unusedCapacity / (1024 ** 2),
        GB: unusedCapacity / (1024 ** 3),
        TB: unusedCapacity / (1024 ** 4),
    };

    // 結果を表示
    document.getElementById('usageRate').innerText = usageRate.toFixed(2); // 使用率を表示
    document.getElementById('unusedRate').innerText = unusedRate.toFixed(2); // 未使用率を表示
    document.getElementById('usageFraction').innerText = (usageFraction * 10).toFixed(2); // 使用割合を表示
    document.getElementById('unusedFraction').innerText = (unusedFraction * 10).toFixed(2); // 未使用割合を表示
    document.getElementById('usedBytesB').innerText = usedBytes.B.toFixed(2); // 使用バイト数を表示
    document.getElementById('usedBytesKB').innerText = usedBytes.KB.toFixed(2); // 使用キロバイト数を表示
    document.getElementById('usedBytesMB').innerText = usedBytes.MB.toFixed(2); // 使用メガバイト数を表示
    document.getElementById('usedBytesGB').innerText = usedBytes.GB.toFixed(2); // 使用ギガバイト数を表示
    document.getElementById('usedBytesTB').innerText = usedBytes.TB.toFixed(2); // 使用テラバイト数を表示
    document.getElementById('unusedBytesB').innerText = unusedBytes.B.toFixed(2); // 未使用バイト数を表示
    document.getElementById('unusedBytesKB').innerText = unusedBytes.KB.toFixed(2); // 未使用キロバイト数を表示
    document.getElementById('unusedBytesMB').innerText = unusedBytes.MB.toFixed(2); // 未使用メガバイト数を表示
    document.getElementById('unusedBytesGB').innerText = unusedBytes.GB.toFixed(2); // 未使用ギガバイト数を表示
    document.getElementById('unusedBytesTB').innerText = unusedBytes.TB.toFixed(2); // 未使用テラバイト数を表示

    // 計算結果を表示
    document.getElementById('result').style.display = 'block'; // 結果を表示
    // スクロールして結果が見えるようにする
    setTimeout(() => {
        document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'center' }); // 結果の位置までスムーズにスクロール
    }, 100); // 少し遅延を入れてスクロール
}

function clearFields() {
    // 入力フィールドをクリア
    document.getElementById('maxCapacity').value = ''; // 最大容量をクリア
    document.getElementById('usedCapacity').value = ''; // 現在使用容量をクリア
    // 結果を非表示に
    document.getElementById('result').style.display = 'none'; // 結果を非表示
}