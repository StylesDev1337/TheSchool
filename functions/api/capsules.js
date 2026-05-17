export async function onRequest(context) {
    
    const JSONBIN_API_KEY = context.env.JSONBIN_API_KEY;
    const JSONBIN_BIN_ID = context.env.JSONBIN_BIN_ID;
    
    // 获取请求的 URL，判断要做什么操作
    const url = new URL(context.request.url);
    
    // 处理 GET 请求 - 读取胶囊
    if (context.request.method === 'GET') {
        try {
            const response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
                headers: {
                    'X-Master-Key': JSONBIN_API_KEY
                }
            });
            const data = await response.json();
            
            return new Response(JSON.stringify({
                success: true,
                capsules: data.record?.capsules || []
            }), {
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (error) {
            return new Response(JSON.stringify({
                success: false,
                error: error.message
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    }
    
    // 处理 POST 请求 - 保存胶囊
    if (context.request.method === 'POST') {
        try {
            // 先读取现有的胶囊
            const readResponse = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
                headers: {
                    'X-Master-Key': JSONBIN_API_KEY
                }
            });
            const existingData = await readResponse.json();
            const existingCapsules = existingData.record?.capsules || [];
            
            // 获取新的胶囊数据
            const newCapsule = await context.request.json();
            existingCapsules.push(newCapsule);
            
            // 保存到 JSONBin
            const saveResponse = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': JSONBIN_API_KEY
                },
                body: JSON.stringify({ capsules: existingCapsules })
            });
            
            const saveData = await saveResponse.json();
            
            return new Response(JSON.stringify({
                success: true,
                data: saveData
            }), {
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (error) {
            return new Response(JSON.stringify({
                success: false,
                error: error.message
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    }
    
    // 其他请求方法返回 404
    return new Response('Not Found', { status: 404 });
}